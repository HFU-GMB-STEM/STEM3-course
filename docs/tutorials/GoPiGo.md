# Introduction to GoPiGo

What Is GoPiGo?

- A small mobile robot platform that attaches to a Raspberry Pi.
- Designed for learning robotics, sensors, and programming with Python.

Hardware Overview
- Base Chassis with motors, wheels, and frame.
- Raspberry Pi mounted on top (user-supplied).
- GoPiGo Control Board that connects to the Pi GPIO Header.
- Battery Pack to power motors.


Simple Python Example

````python
# Example: drive_demo.py
from gopigo3 import Robot
gpg = Robot()

# Drive forward 20 cm, then stop
gpg.drive_cm(20)
gpg.stop()
````

**Live Demo:**

* Power on the GoPiGo (battery pack or power supply).
* On your laptop, open your Wi-Fi list.

* Look for a network like GoPiGo.

* Connect to that network (no internet access needed).

Once connected, open your browser and go to: http://mygopigo.com/python

You should see the GoPiGo control panel / Jupyter environment.

The instructions for your first project you can find here:
[Orienteer](https://edu.modrobotics.com/course/view.php?id=16)