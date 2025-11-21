// Define the GPIO pins where the LED is connected and the one for touch input
const int ledPin = 26; // Change this to the pin you used
const int touchPin = T6; // Change this to the pin you used
const int capturePin = T5; // Change this to the pin you used

bool LED_OFF = false; // set the initial value for the LED

void setup() {
  Serial.begin(115200); // Initialize serial communication for debugging
  delay(1000);  // give me time to bring up serial monitor

  // Initialize the touch pins as input
  pinMode(touchPin, INPUT);
  pinMode(capturePin, INPUT);
  
  //Optional: Set the threshold to 5% of the benchmark value. Only effective if threshold = 0.
  touchSetDefaultThreshold(5);
  touchAttachInterrupt(touchPin, onTouch, 0); // Attach touch interrupt using default threshold
  touchAttachInterrupt(capturePin, onCapture, 0);

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
  Serial.println("Touched LEDpin"); // Print message when touch is detected
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

void onCapture() {
  Serial.print("CAPTURE"); // send capture signal
}