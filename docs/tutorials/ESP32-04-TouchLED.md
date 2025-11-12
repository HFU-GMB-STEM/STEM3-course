# Touch Input to control an LED with the ESP32

In this tutorial, we will combine [touch input](./ESP32-03-TouchInput.md) and [output control](./ESP32-02-OutputControls.md) using the ESP32 microcontroller. We will use a touch-capable GPIO pin to detect touch events and control an LED based on those events.

## Hardware Setup

### Components Needed

1. ESP32 Development Board
2. USB Cable for programming the ESP32
3. Computer with Arduino IDE installed
4. Input components (we simply use wires as touch sensors)
5. Breadboard and wires
6. Output components (we use an LED and therefore we need resistors)

### Wiring everything together

Combine the wiring instructions from the previous two tutorials and note down which GPIO pins you are using for the touch input and the LED output.

### Programming the ESP32

```cpp
// Define the GPIO pins where the LED is connected and the one for touch input
const int ledPin = X; // Change this to the pin you used
const int touchPin = X; // Change this to the pin you used
boolean LED_OFF = false; // set the initial value for the LED

void setup() {
  Serial.begin(115200); // Initialize serial communication for debugging
  delay(1000);  // give me time to bring up serial monitor
  
  //Optional: Set the threshold to 5% of the benchmark value. Only effective if threshold = 0.
  touchSetDefaultThreshold(5);
  touchAttachInterrupt(touchPin, onTouch, 0); // Attach touch interrupt using default threshold

  // Initialize the LED pin as an output
  pinMode(ledPin, OUTPUT);
  if (LED_OFF) {
    digitalWrite(ledPin, LOW); // turn LED off initially
  } else {
    digitalWrite(ledPin, HIGH); // turn LED on initially
  }
  
}

void loop() {
  // do nothing
}

void onTouch() {
  Serial.println("Touch detected!"); // Print message when touch is detected
  toggleLED();
}

void toggleLED() {
  
  if (LED_OFF) {
    // Turn the LED on
    digitalWrite(ledPin, HIGH);
    LED_OFF = false;
  } else {
    // Turn the LED off
    digitalWrite(ledPin, LOW);
    LED_OFF = true;
  }
}
```

### Uploading the Code

First, verify that the code is correct by clicking the "Verify" button (check mark) in the Arduino IDE. If there are no errors, click the "Upload" button (right arrow) to upload the code to the ESP32. You should see the update process logged in the IDE. After the upload is complete, open the Serial Monitor (magnifying glass icon on the top right) to see the debug messages from the ESP32.

What happens when you touch the wire connected to the touch-capable GPIO pin? Does the LED connected to the ESP32 toggle its state (on to off or off to on) each time you touch the wire?

## Next Steps

- How can we modify the code so that we can use the touch input like a switch? (i.e., touch once to turn the LED on, touch again to turn it off)
