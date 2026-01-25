int ledPin = 1; // the pin of the on-board LED

void setup() {
  pinMode(ledPin, OUTPUT); // set pin 2 as output
}

void loop() {
  digitalWrite(ledPin, HIGH); // sets pin to high voltage (ON)
  delay(500); // wait half a second
  digitalWrite(ledPin, LOW); // set pin to low voltag (OFF)
  delay(500); // wait again
}