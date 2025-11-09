# Controlling a LED with the ESP32

In this tutorial, we will learn how to control an external LED using the ESP32 microcontroller. We will connect an LED to one of the GPIO pins of the ESP32 and write a simple program to turn the LED on and off.

## Hardware Setup

### Components Needed

1. ESP32 Development Board
2. USB Cable for programming the ESP32
3. Computer with Arduino IDE installed
4. Breadboard and wires

    ![wires](./images/wires.png)![breadboard](./images/breadboard.png)

5. Output components (we use an LED and therefore we need resistors)

    ![leds and resistors](./images/leds-resistors.png)

### Wiring the LED

1. Connect the longer leg (anode) of the LED to a GPIO pin on the ESP32 (e.g., GPIO 18).
2. Connect the shorter leg (cathode) of the LED to one end of a resistor (typically 220-330 ohms).
3. Connect the other end of the resistor to the GND pin on the ESP32.
4. Make sure all connections are secure.

### Programming the ESP32

```cpp
// Define the GPIO pin where the LED is connected
const int ledPin = 18; // Change this to the pin you used
void setup() {
  // Initialize the LED pin as an output
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // Turn the LED on
  digitalWrite(ledPin, HIGH);
  delay(1000); // Wait for 1 second

  // Turn the LED off
  digitalWrite(ledPin, LOW);
  delay(1000); // Wait for 1 second
}
```

### Uploading the Code

First, verify that the code is correct by clicking the "Verify" button (check mark) in the Arduino IDE. If there are no errors, click the "Upload" button (right arrow) to upload the code to the ESP32. You should see the update process logged in the IDE. After the upload is complete, the LED connected to the ESP32 should start blinking, turning on for one second and off for one second in a loop. You have successfully controlled an output device (LED) using the ESP32!

## Adding debug output with Serial Monitor

Adjust the code above to include `Serial.begin(115200);` in the `setup()` function and `Serial.println("LED ON");` and `Serial.println("LED OFF");` in the `loop()` function. This will send debug messages to the Serial Monitor.

You can also open the Serial Monitor (magnifying glass icon on the top right) to see the debug messages from the ESP32.

## Control Questions

- How can you modify the code to change the blink rate of the LED?
- Why is the internal LED blinking as well? What is it indicating?
- What would happen if you connected the LED without a resistor? (Do not try this!)
- How can you control multiple LEDs with the ESP32?