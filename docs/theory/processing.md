# Processing: Microcontroller, Microprocessor

For processing we need a computer. Different purposes require different computers. E.g. your laptop has a different purposes than the one in your phone or the camera.

## Microcontroller

In physical computing very often a microcontroller is used.

* Are optimized for control of physical input and output.
* Small, very simple and receives information through sensors, controls basic motors and sends information to other devices.
* Found in everything e.g. washing machines, light switches, keyboards and computer mice.
* Don't have an operating system, just run one program (that you will program onto the controller from a personal computer using a dedicated hardware programming device).
* Come in different layouts and sizes but need a so called development board to operate:
    * The Processor Itself
    * Power Regulation Circuitry
    * Hardware Programmer Connector
    * Communications Interface Circuitry

## Examples:
### ESP32
![ESP32 module](./images/esp32_pin.png)  


![ESP32 module](../tutorials/images/ESP32-WROOM-32_board.jpeg)  


This is a microcontroller with integrated Wi‑Fi and Bluetooth, designed for IoT and embedded applications. (Used also in this class)

Here is a tutorial page dedicated to [ESP32.](https://randomnerdtutorials.com/getting-started-with-esp32/)

### Arduino Uno (development board)
![Arduino Uno](./images/arduino_devboard.jpg)  



## Microprocessor

### [Raspberry Pi](http://raspberrypi.org)  

More powerful: Microprocessor



* A computer.

* Needs periphery (RAM, memory).

* Runs an operating system. 

* Cost-effective and fully-fledged personal computer.

We will use it also in class embedded in a small driving robot.

## Pin Functions of Microcontroller

Microcontrollers can have between 6 and 60 pins:

* Attach power connections.
* Input and output connections.
* Communications connections. 

Every microcontroller has different configurations for its pins, and often one pin will have more than one function. 

![ESP32 Devboard Pins](./images/esp32_devb_pins.jpg)

### ESP32 Pin Layers

| Pin Layer | Description | What It Refers To |
|---|---|---|
| **ESP32-WROOM-32 Module pins** | The **38 physical pads** on the **metal-cased module itself** | These are directly connected to the ESP32 chip inside the module |
| **Development board pins** | The **header pins** (e.g., “GPIO 21”, “VIN”, “3V3”) on your **DevKit** | These are **mapped** to the module pins, sometimes with naming differences or extra components in between because these are functional pin names (what they do) |

Lets consider:

| GPIO15|  ADC2_CH3 | TOUCH3 | HSPI_CS0 | RTC_GPIO13|

Each part describes different internal functions of the same physical pin on the ESP32.

**GPIO15**: digital pin number used in Arduino or ESP-IDF code.

* When you use `digitalWrite(15, HIGH)` you’re toggling this pin.
* It’s the logical pin identifier.

**ADC2_CH3**

* This means the pin is connected to the Analog-to-Digital Converter 2, Channel 3.

**TOUCH3**

The ESP32 has capacitive touch sensors built into some GPIOs. 

* TOUCH3 means this pin can act as touch sensor number 3.

In Arduino, you can use it like:

`int touchValue = touchRead(T3);  // or touchRead(15)`

**HSPI_CS0** (SPI = Serial Peripheral Interface)

Use it when you connect e.g. to a display or other sensors.

#### References for pins
A reference to ESP32 pins you can find on this [page.](https://randomnerdtutorials.com/esp32-pinout-reference-gpios/)
You can find more details generally on pins on this [page.](https://itp.nyu.edu/physcomp/resources/microcontroller-pin-functions/){target = "_blank"}

