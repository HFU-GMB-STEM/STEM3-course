let dataStream = "";

function startConnection() {
  if (navigator.serial) {
    connectSerial();
  } else {
    alert("Web Serial API not supported.");
  }
}

async function connectSerial() {
  try {
    const port = await navigator.serial.requestPort();
    await port.open({ baudRate: 115200 });

    const decoder = new TextDecoderStream();

    port.readable.pipeTo(decoder.writable);

    const reader = decoder.readable.getReader();

    console.log("ESP ready!");
    connectBtn.name("&#10003; Connected");
    connectBtn.domElement.previousSibling.style.backgroundColor = "#19745a";
    //handleLoaded();

    let dataStream = "";
    let isPaused = false;

    while (true) {
      if (isPaused) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        continue;
      }

      const { value, done } = await reader.read();

      if (value) {
        console.log("[readLoop] Received:", value);
        dataStream += value;
        if (dataStream.length > 8) {
          if (dataStream.includes("CAPTURE")) {
            const captureBtn = document.getElementById("capture");
            if (captureBtn && !captureBtn.disabled) {
              isPaused = true;
              dataStream = "";
              captureBtn.click();
              setTimeout(() => {
                isPaused = false;
              }, 3000);
            }
          }
        }
      }
      if (done) {
        console.log("[readLoop] DONE", done);
        reader.releaseLock();
        break;
      }
    }
  } catch (error) {
    connectBtn.name("&#x26A0; Error with ESP");
    connectBtn.domElement.previousSibling.style.backgroundColor = "#842047";
    console.error(error);
  }
}

let gui = new dat.gui.GUI();

let config = {
  connect: function () {},
};

let guiMain = gui.addFolder("ESP32 Connector");
guiMain.open();
gui
  .add(config, "connect")
  .name("&#8594 Connect to ESP")
  .onChange(function () {
    startConnection();
  });

let connectBtn = gui.__controllers[0];
connectBtn.domElement.previousSibling.style.backgroundColor = "#842047";
