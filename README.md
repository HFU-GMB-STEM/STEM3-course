# STEM3-course

This repository contains all needed files for a mkdocs web page for the course STEM3 (Physical Computing) in the [Games and Immersive Media Bachelor program](https://www.hs-furtwangen.de/en/study/programmes/games-immersive-media-bachelor) at the Hochschule Furtwangen - the Black Forest University.

## MKDocs help

### Installation

To install [MkDocs](https://www.mkdocs.org/getting-started/), you need to have Python installed on your system. You can then install MkDocs using pip, the Python package manager. Open your terminal or command prompt and run the following command:

```bash
pip install mkdocs
```

### Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

### Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.

### Continous Integration

To use [mkdocs plugins](https://www.mkdocs.org/dev-guide/plugins/) it is necessary to install the required packages. This can be done with `pip`. For example, to install the plugins used in this project, run:

```bash
pip install mkdocs-material
pip install mkdocs-roamlinks-plugin
pip install mkdocs-rss-plugin
pip install mkdocs-video
pip install mkdocs-audio
```

For continous integration, these commands are included in the GitHub Actions workflow defined in `.github/workflows/ci.yml`.

