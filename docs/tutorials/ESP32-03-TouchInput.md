# Touch Input with the ESP32

In this tutorial, we will learn how to use the touch input capabilities of the ESP32 microcontroller. The ESP32 has several capacitive touch sensors built into its GPIO pins, allowing us to detect touch events without needing additional hardware.

## Hardware Setup

### Components Needed

1. ESP32 Development Board
2. USB Cable for programming the ESP32
3. Computer with Arduino IDE installed
4. Input components (we simply use wires as touch sensors)

    ![touch wires](./images/touch-wires.png)

### Wiring the Touch Input

1. Connect one end of a wire to a touch-capable GPIO pin on the ESP32 (e.g., GPIO 2 aka Touch2 or T2).
2. Be ready to touch the other end of the wire with your finger to simulate a touch event.

### Programming the ESP32 for Touch Input

```cpp
const int touchPin = T2; // Touch pin GPIO 2
void setup() {
  Serial.begin(115200); // Initialize serial communication for debugging
  delay(1000);  // give me time to bring up serial monitor
  //Optional: Set the threshold to 5% of the benchmark value. Only effective if threshold = 0.
  touchSetDefaultThreshold(5);
  touchAttachInterrupt(touchPin, onTouch, 0); // Attach touch interrupt using default threshold
}
void loop() {
  // Main loop does nothing, waiting for touch events
}
void onTouch() {
  Serial.println("Touch detected!"); // Print message when touch is detected
}
```

### Uploading the Code

First, verify that the code is correct by clicking the "Verify" button (check mark) in the Arduino IDE. If there are no errors, click the "Upload" button (right arrow) to upload the code to the ESP32. You should see the update process logged in the IDE. After the upload is complete, open the Serial Monitor (magnifying glass icon on the top right) to see the debug messages from the ESP32.

When you touch the wire connected to the touch-capable GPIO pin, you should see "Touch detected!" printed in the Serial Monitor. You have successfully used touch input with the ESP32!

## Control Questions

- What is the purpose of the `Serial.begin()` function in the setup?
- How can you change the touch pin to use a different GPIO pin?
- What happens if you change the threshold value in `touchSetDefaultThreshold()`?
- How can you modify the code to perform a different action when a touch is detected?