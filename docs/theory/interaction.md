# Interaction: Input, Output, and Processing

Definition according to Chris Crawford (author and game programmer):
"an iterative process of listening, thinking, and speaking between two or more actors". 

A physical project can be broken into down the same three stages: listening, thinking, speaking. In computer terms: input, processing, output.

* Input
* Output

Signals here can be 

* Analog 
* Digital

## Interaction 

* Serial 
* Parallel

## Input

### Sensors (Input transducers) 

* Sense the world.
* Convert heat, light, motion, and sound into electrical energy.

#### Examples (AI generated, verified)
| Physical Quantity (Input) | Conversion | Input Transducer (Example) |
|---|---|---|
| Heat (temperature) | Converts heat → change in resistance or voltage | Thermistor, Thermocouple |
| Light | Converts light intensity → change in resistance or current | LDR (Light Dependent Resistor), Photodiode, Phototransistor |
| Motion / Position | Converts movement or position → electrical signal | Switch, Potentiometer, Rotary encoder|
| Sound (vibrations) | Converts sound waves → varying voltage | Microphone |
| Pressure | Converts pressure → change in resistance or voltage | Strain gauge, Piezoelectric sensor, BMP sensor |
| Magnetic field | Converts magnetic field strength → voltage | Hall effect sensor |
| Humidity | Converts moisture level → change in capacitance | Capacitive humidity sensor|
| Displacement / Stretch | Converts mechanical displacement → voltage | LVDT (Linear Variable Differential Transformer), FSR (force sensitive resistor) |

Notes:

- Pick the sensor by asking "what do I want to know?" and where it will be used (indoors/outdoors, battery or mains).
- Simpler sensors are easier to start with, add more precise ones as needed.

## Output

### Actuators (output transducers)

* Change the world.
* Convert electrical energy into various forms that the body can sense.

#### Examples (AI generated, verified)
| Electrical Input | Conversion | Actuator (Example) |
|---|---|---|
| Electrical energy | Converts electricity → rotational motion | Electric motor |
| Electrical energy | Converts electricity → linear push/pull motion | Solenoid |
| Electrical signal | Converts signal → mechanical switching | Relay |
| Electrical energy | Converts electricity → heat | Heater element |
| Electrical energy | Converts electricity → light | Lamp, LED |
| Electrical signal | Converts signal → sound (air vibration) | Buzzer, Speaker |
| Electrical energy | Converts electricity → precise mechanical displacement | Piezoelectric actuator |
| Electrical control signal | Converts electricity → mechanical motion via fluid/air | Hydraulic or pneumatic actuator |

Notes:

- Choose an actuator by asking "what do I want to move or change?" and where it will be used (indoor/outdoor, sealed, etc.).
- Check required power, voltage and current; many actuators need drivers, and other electronic parts.
- Match force/torque, speed and travel/stroke to the task.
- Consider control method (on/off, analog) and whether position/force feedback is needed.
- Account for heat, noise, mechanical safety (stops, guards) and electrical isolation.
- Prefer modular and serviceable actuators for maintenance and replacement.
- For battery-powered systems, consider energy use and standby consumption.

## Processing
Input and output are the physical parts of physical computing. The third part is the programming part: 

* Computer reads input.
* Makes decisions based on the changes it reads.
* Activate outputs or send messages to other computers.


