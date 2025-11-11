# Touch Input to capture images

In this tutorial, we will combine [touch input](./ESP32-03-TouchInput.md) and an [OpenCV](https://docs.opencv.org/4.12.0/) application running on a computer to capture images when the ESP32 touch sensor is activated.

## Hardware Setup

### Components Needed

1. ESP32 Development Board
2. USB Cable for programming the ESP32
3. Computer with Arduino IDE and **Python environment** (alternatively use JavaScript) installed
4. Input components (we simply use wires as touch sensors)
5. Breadboard and wires
6. Optional: Output components (we use an LED and therefore we need resistors)

### Wiring everything together

We only need to wire the touch input as described in the [Touch Input tutorial](./ESP32-03-TouchInput.md). Note down which GPIO pin you are using for the touch input.

### Programming the ESP32

Define the GPIO pin where the touch sensor is connected:

```cpp
const int capturePin = T2; // Change this to the pin you used
```

Add the following code to your ESP32 sketch in the setup function to attach the touch interrupt to the capture pin:

```cpp
touchAttachInterrupt(capturePin, onCapture, 0);
```

Then add the following function to handle the touch event and send a capture signal via Serial:

```cpp
void onCapture() {
  Serial.print("CAPTURE"); // send capture signal
}
```

### Uploading the Code

First, verify that the code is correct by clicking the "Verify" button (check mark) in the Arduino IDE. If there are no errors, click the "Upload" button (right arrow) to upload the code to the ESP32. You should see the update process logged in the IDE. After the upload is complete, open the Serial Monitor (magnifying glass icon on the top right) to see the debug messages from the ESP32.

Stop the Serial Monitor after verifying that the ESP32 is running correctly.

### Setting up the Computer Application

To capture images when the ESP32 touch sensor is activated, we will use a Python script that listens to the Serial port for the "CAPTURE" signal and then captures an image using OpenCV.

#### Python solution

Make sure you have Python installed on your computer.

##### Creating and activating a Virtual Environment

It is highly recommended to create a virtual environment for this project. You can do this using the following commands:

###### MacOS/Linux

```bash
python -m venv .venv
source .venv/bin/activate  
```

###### Windows (PowerShell)

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

Note On Microsoft Windows, it may be required to enable the `Activate.ps1` script by setting the execution policy for the user. You can do this by issuing the following PowerShell command:

```powershell
PS C:\> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

See [About Execution Policies](https://go.microsoft.com/fwlink/?LinkID=135170) for more information.

##### Installing Required Packages

Make sure your computer is connected to the Internet. Install the required packages using pip:

```bash
pip install pyserial opencv-python
```

##### Python Script

Use the Python script [touch_capture.py](./code/python/touch_capture.py) provided in the code folder of this course repository and copy it to your working directory.

Run the script using the following command:
  
```bash
python touch_capture.py
```

This script will listen to the Serial port for the "CAPTURE" signal from the ESP32 and capture an image using OpenCV when the signal is received. The captured images will be saved in the same directory as the script.

#### JavaScript solution

Download the JavaScript code [touch_capture.js.zip](./code/javascript/touch_capture.js.zip) provided in the code folder of this course repository, copy it to your working directory and start it with a local server. Or test it [online here](./code/javascript/photobooth.html).

## Next Steps

- Try to understand the Python or JavaScript code and modify it to change some details. We will cover this in more detail in later sections.
- Think about how to extend this setup to use other trigger mechanisms or to add more features to the image capture application.
