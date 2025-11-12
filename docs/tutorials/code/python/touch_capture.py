import argparse
import cv2
import serial
from serial.tools import list_ports   
import sys
import time
import os
from datetime import datetime

# Configuration
BAUD_RATE = 115200
SAVE_DIR = 'captured_images'

def choose_port(provided_port=None):
    if provided_port:
        return provided_port
    ports = list(list_ports.comports())
    if not ports:
        print("No serial ports found. Connect the ESP32 and try again.")
        sys.exit(1)
    if len(ports) == 1:
        return ports[0].device
    # prefer common USB-to-UART descriptors if multiple ports exist
    for p in ports:
        desc = (p.description or "").lower()
        if any(x in desc for x in ("silicon", "cp210", "ch340", "ftdi", "usb-serial")):
            return p.device
    # fallback: return first
    return ports[0].device

def main() -> None:
    """Run the capture loop that reacts to serial CAPTURE signals."""
    os.makedirs(SAVE_DIR, exist_ok=True)

    parser = argparse.ArgumentParser(description="Send 'Hello ESP32!' to an ESP32 over serial.")
    parser.add_argument("-p", "--port", help="Serial port (e.g. /dev/ttyUSB0 or COM3)")
    parser.add_argument("-b", "--baud", type=int, default=BAUD_RATE, help="Baud rate (default: 115200)")
    parser.add_argument("-t", "--timeout", type=float, default=1.0, help="Read timeout in seconds")
    args = parser.parse_args()

    port = choose_port(args.port)
    try:
        with serial.Serial(port, args.baud, timeout=args.timeout) as ser:
            cap = cv2.VideoCapture(0)
            if not cap.isOpened():
                raise RuntimeError("Unable to open camera 0.")

            print("Press 'q' to quit")

            countdown_active = False
            countdown_start = 0.0
            frozen_frame = None

            try:
                while True:
                    if ser.in_waiting > 0:
                        data = ser.readline().decode('utf-8').strip()
                        if data == "CAPTURE":
                            countdown_active = True
                            countdown_start = time.time()
                            print("Capture signal received! Starting countdown...")

                    ret, frame = cap.read()
                    if not ret:
                        break

                    display_frame = frame.copy()

                    if countdown_active:
                        elapsed = time.time() - countdown_start
                        remaining = 3 - int(elapsed)

                        if remaining > 0:
                            w, h = display_frame.shape[1], display_frame.shape[0]
                            cv2.putText(display_frame, str(remaining), (w//2, h//2),
                                        cv2.FONT_HERSHEY_SIMPLEX, 12, (255, 0, 0), 5)
                        elif remaining == 0 and frozen_frame is None:
                            frozen_frame = frame.copy()
                            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
                            filename = os.path.join(SAVE_DIR, f"capture_{timestamp}.jpg")
                            cv2.imwrite(filename, frozen_frame)
                            print(f"Image saved: {filename}")
                        elif elapsed > 5:
                            countdown_active = False
                            frozen_frame = None

                    if frozen_frame is not None:
                        cv2.imshow('Webcam', frozen_frame)
                    else:
                        cv2.imshow('Webcam', display_frame)

                    if cv2.waitKey(1) & 0xFF == ord('q'):
                        break
            finally:
                cap.release()
                cv2.destroyAllWindows()
    except serial.SerialException as e:
        print(f"Could not open port {port}: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()