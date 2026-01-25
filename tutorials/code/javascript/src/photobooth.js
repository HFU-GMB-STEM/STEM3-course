function onOpenCvReady() {
  document.getElementById("status").innerHTML = "OpenCV.js is ready.";

  cv['onRuntimeInitialized']=()=>{
    // enable start button
    document.getElementById("capture").disabled = false;
    

    let videoElement = document.getElementById("videoInput"); // video is the id of video tag
    
    showWebcam(videoElement);

    //showWebcamWithOpenCv(videoElement);
  };
  
}

function showWebcam(video) {
    // classic webcam access without opencv
  
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(function (stream) {
      video.srcObject = stream;
      video.play();
    })
    .catch(function (err) {
      console.log("An error occurred! " + err);
    });
}

function captureImageWithOpenCV(video) {
  console.log("showWebcamWithOpenCv");
  // webcam access with opencv
  let src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
  let dst = new cv.Mat(video.height, video.width, cv.CV_8UC1);
  let cap = new cv.VideoCapture(video);
  
  cap.read(src);
  cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
  cv.imshow("canvasOutput", dst);
  //cv.imwrite("captured_image.png", dst);
  captureFinished();
}

// prepare webcam button
let utils = new Utils("errorMessage");

let streaming = false;
let videoInput = document.getElementById("videoInput");
let capture = document.getElementById("capture");
let canvasOutput = document.getElementById("canvasOutput");
let canvasContext = canvasOutput.getContext("2d");
// set canvas setting to will read frequently
canvasContext.fillStyle = "black";
canvasContext.fillRect(0, 0, canvasOutput.width, canvasOutput.height);
canvasContext.settings = { willReadFrequently: true };

capture.addEventListener("click", () => {
  if (!streaming) {
    utils.clearError();
    utils.startCamera("qvga", onVideoStarted, "videoInput");
  }
});

function onVideoStarted() {
  streaming = true;
  let countdown = 3;
  capture.innerText = "Capturing..." + countdown + "...";
  videoInput.width = videoInput.videoWidth;
  videoInput.height = videoInput.videoHeight;
  // capture image and show on canvas
  
    //capture.innerText = countdown;
    let countdownInterval = setInterval(() => {
      countdown--;
      if (countdown > 0) {
        capture.innerText += countdown + "...";
      } else {
        clearInterval(countdownInterval);
        capture.innerText = "Capturing...";
      }
    }, 1000);
    setTimeout(() => {
          captureImageWithOpenCV(videoInput);
        }, countdown * 1000);
}

function captureFinished() {
  streaming = false;
  //canvasContext.clearRect(0, 0, canvasOutput.width, canvasOutput.height);
  capture.innerText = "Capture";
}

function onOpenCvError() {
  // eslint-disable-line no-unused-vars
  let element = document.getElementById("status");
  element.setAttribute("class", "err");
  element.innerHTML = "Failed to load opencv.js";
}