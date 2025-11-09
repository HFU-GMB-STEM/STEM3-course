---
marp: true
theme: default
paginate: true
title: Day 2 - Basics of Input & Output
backgroundColor: #f4f4f4
color: #333
---

# **Day 2: Basics of Input & Output**

### Physical Computing for Game Design

---

## **Overview**

### Today’s Topics:
1. **Input & Output**: Connecting and programming sensors and actuators.
2. **Digital vs. Analog Signals**: Understanding how they work in microcontrollers.
3. Hands-on Lab: Reading sensor values, controlling actuators.

---

## **What is Input & Output?**

- **Input**: Devices that allow the system to receive data from the environment.
  - Examples: Buttons, sensors (light, temperature, motion).
- **Output**: Devices that allow the system to interact with the environment.
  - Examples: LEDs, buzzers, motors.

---

## **Input Devices**

### Examples of Common Sensors:
1. **Light Sensor (Photoresistor)**:
   - Measures light intensity.
2. **Temperature Sensor (e.g., LM35)**:
   - Reads environmental temperature.
3. **Proximity Sensor**:
   - Detects the presence of nearby objects.
4. **Push Buttons**:
   - Simple digital input for user interaction.

---

## **Output Devices**

### Examples of Actuators:
1. **LEDs**:
   - Emit light (visual feedback).
2. **Buzzers**:
   - Produce sound (audio feedback).
3. **Servo Motors**:
   - Provide controlled movement.
4. **Vibration Motors**:
   - Haptic feedback for interaction.

---

## **How Does Input/Output Work?**

1. **Input:**
   - Sensors convert physical phenomena (light, temperature, motion) into electrical signals.
   - Microcontroller reads these signals via pins.
2. **Output:**
   - Microcontroller sends signals to actuators to produce effects (light, motion, sound).

---

## **Digital vs. Analog Signals**

### **Digital Signals**
- Represented as **ON** or **OFF** (1 or 0).
- Example: A button press (pressed = 1, not pressed = 0).

### **Analog Signals**
- Continuous range of values (e.g., 0–1023 in Arduino).
- Example: Light intensity measured by a photoresistor.

---

## **Digital Signals: Example**

### Reading a Button:
- **Digital Input**: `HIGH` or `LOW` based on button state.
- Arduino Code:
  ```cpp
  int buttonPin = 2;
  void setup() {
    pinMode(buttonPin, INPUT);
  }
  void loop() {
    int buttonState = digitalRead(buttonPin);
  }
  ```

---

## **Analog Signals: Example**

### Reading a Light Sensor:
- **Analog Input**: Voltage proportional to light intensity.
- Arduino Code:
  ```cpp
  int lightSensorPin = A0;
  void setup() {
    Serial.begin(9600);
  }
  void loop() {
    int sensorValue = analogRead(lightSensorPin);
    Serial.println(sensorValue);
  }
  ```

---

## **Controlling Actuators: Example**

### Controlling an LED:
- **Digital Output**: Turn the LED ON or OFF.
- Arduino Code:
  ```cpp
  int ledPin = 13;
  void setup() {
    pinMode(ledPin, OUTPUT);
  }
  void loop() {
    digitalWrite(ledPin, HIGH); // Turn LED ON
    delay(1000);               // Wait 1 second
    digitalWrite(ledPin, LOW);  // Turn LED OFF
    delay(1000);               // Wait 1 second
  }
  ```

---

## **Lab: Reading from Sensors**

1. Connect a light sensor to an analog pin (e.g., A0).
2. Write code to read the sensor value.
3. Print the value to the serial monitor.

---

## **Lab: Controlling Actuators**

1. Connect an LED to a digital pin (e.g., pin 13).
2. Write code to turn the LED ON and OFF.
3. Experiment with delay values to make it blink.

---

## **Digital vs. Analog: Summary**

| **Feature**       | **Digital**            | **Analog**            |
|--------------------|------------------------|-----------------------|
| **Signal Type**    | ON/OFF (1/0)           | Continuous Range      |
| **Examples**       | Buttons, LEDs          | Light sensors         |
| **Pins on Arduino**| `digitalRead()`/`digitalWrite()` | `analogRead()`        |

---

## **Next Steps**

### Tomorrow:

- Serial Communication: Arduino ↔ Unity
- Lab: Use Arduino to control a game.

---

# **Questions?**
```

---
