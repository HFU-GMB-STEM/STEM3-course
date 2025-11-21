int ledPin = 18; // the pin used to connect the LED

void setup() {
  Serial.begin(115200); // use serial connection to debug
  Serial.println("Setup"); // to check in serial monitor
  pinMode(ledPin, OUTPUT); // set pin 2 as output
}

void loop() {
  digitalWrite(ledPin, HIGH); // sets pin to high voltage (ON)
  Serial.println("LED ON"); // to check in serial monitor
  delay(1000); // wait half a second
  digitalWrite(ledPin, LOW); // set pin to low voltag (OFF)
  Serial.println("LED OFF"); // to check in serial monitor
  delay(1000); // wait again
}