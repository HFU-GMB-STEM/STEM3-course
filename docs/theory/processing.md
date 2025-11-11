
For processing we need a computer. Different purposes require different computers. E.g. your laptop has a different purposes than the one in your phone or the camera.

# Microcontroller

In physical computing very often a microcontroller is used.

* are optimized for control of physical input and output.
* small, very simple and receives information through sensors, controls basic motors and sends information to other devices.

* found in everything e.g. washing machines, light switches, keyboards and computer mice.

* don't have an operating system, just run one program (that you will program onto the controller from a personal computer using a dedicated hardware programming device).
* come in different layouts and sizes but need a so called development board to operate:
    * The processor itself
    * Power regulation circuitry
    * Hardware programmer connector
    * Communications interface circuitry

## Examples:
### ESP32
![ESP32 module](./images/esp32_pin.png)  


![ESP32 module](../tutorials/images/ESP32-WROOM-32_board.jpeg)  


microcontroller with integrated Wi-Fi and Bluetooth, designed for IoT and embedded applications. (used also in this class)

### Arduino Uno (development board)
![Arduino Uno](./images/arduino_devboard.jpg)  



# Microprocessor

### [Raspberry Pi](http://raspberrypi.org)  

More powerful: Microprocessor



* a computer

* Needs periphery (RAM, memory)

* Runs an operating system 

* cost-effective and fully-fledged personal computer.

We will use it also in class embedded in a small driving robot.

## Pin Functions of Microcontroller

Microcontrollers can have between 6 and 60 pins:

* attach power connections
* input and output connections
* communications connections. 

Every microcontroller has different configurations for its pins, and often one pin will have more than one function. 
![ESP32 Devboard Pins](./images/esp32_devb_pins.jpg)
You can find more detail on this [page](https://itp.nyu.edu/physcomp/resources/microcontroller-pin-functions/)