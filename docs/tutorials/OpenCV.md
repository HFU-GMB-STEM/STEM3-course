# OpenCV Tutorial

## Introduction

OpenCV (Open Source Computer Vision Library) is an open-source computer vision and machine learning software library. It contains more than 2500 optimized algorithms for a wide range of computer vision tasks, including object detection, image processing, and video analysis. It is available since 1999 and has become one of the most popular libraries in the field of computer vision.

## Getting Started

The tutorials are provided as Jupyter Notebooks. To get started, ensure you have the following prerequisites installed:

- Python 3.7 or higher
- Jupyter Notebook
- OpenCV library

## Notebooks

The following notebooks will guide you through various OpenCV functionalities. Just right-click on the links below and choose "Save Link As..." to download them to your local machine. Then open them with Jupyter Notebook or in [Google Colab](https://colab.research.google.com/). If you use Google Colab, make sure to upload the additional datasets and images provided in the [`STEM3-images.zip`](notebooks/STEM3-images.zip) file to your Colab environment. And WebCam access in Colab requires some additional setup; please refer to [this example](https://colab.research.google.com/drive/1QnC7lV7oVFk5OZCm75fqbLAfD9qBy9bw).

- [01 OpenCV Basics](./notebooks/OpenCV-01-basics.ipynb): Introduction to OpenCV, image loading, and basic operations including color space conversions and webcam access.
- [01 OpenCV HSV Tracking](./notebooks/OpenCV-01-HSVtracking.ipynb): Tracking an object based on HSV thresholds.
- [02 OpenCV Image Transformations](./notebooks/OpenCV-02-image_transformations.ipynb): Image translation, rotation, resizing, and perspective transformations.
- [03 OpenCV Camera Calibration](./notebooks/OpenCV-03-camera_calibration.ipynb): Camera calibration with chessboard patterns, distortion correction, and real-world measurements.
- [04 OpenCV Filters](./notebooks/OpenCV-04-filters.ipynb): Filters and simple detections, apply spatial filters and extract structure with edges, contours, and connected components.
- [05 OpenCV Object Detection](./notebooks/OpenCV-05-object_detection.ipynb): Human hand gesture detection with Google's [mediapipe library](https://github.com/google-ai-edge/mediapipe) and a pre-trained model.

You can download the notebooks and run them in your local Jupyter environment. Additional datasets and images used in the tutorials are provided in the [`STEM3-images.zip`](notebooks/STEM3-images.zip) file.

## Additional Resources

Image processing theory slides:

- [Image basics](../theory/STEM3-ImageBasics.pdf)
- [Color spaces](../theory/STEM3-ColorSpaces.pdf)
- [Image transformations](../theory/STEM3-ImageTransformations.pdf)
- [Image filtering](../theory/STEM3-ImageFilters.pdf)

Videos shown in class:

- [Perspective projection in 5 minutes by Graphics in 5 Minutes](https://www.youtube.com/watch?v=F5WA26W4JaM)
- [Affine transformations in 5 minutes by Graphics in 5 Minutes](https://www.youtube.com/watch?v=AheaTd_l5Is)
- [Artificial intelligence, revealed by Yann LeCun (meta)](https://engineering.fb.com/2016/05/10/ai-research/ai-revealed/)