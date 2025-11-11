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