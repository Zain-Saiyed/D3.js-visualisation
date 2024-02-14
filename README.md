# D3.js-visualisation

## Overview:

D3 visualisation dashboard containing following charts: doughnut, bar, and radar charts. 

| Description | URL|
| -- | -- |
| Deployed Site | https://d3-visualisation-zainuddin.netlify.app/ |
| Project Code  | https://github.com/Zain-Saiyed/D3.js-visualisation/tree/main/Code |

## Project structure:

The `Code` folder contains the program for realising the d3-visualisation.
```
-- Folders --

D3.js-visualisation/
└───Code/
    ├───assets/
    ├───css/
    ├───payload-data/
    └───js/
        ├───svg-charts/
        └───utils/
```

**Folders:**

1. `Code/` : Main directory containing the entire code base.
2. `assets/`: contains the static image assets/files used in the d3 visualistion dashbaord.
3. `css/`: contains the css files used in the project.
4. `payload-data`: contains data for the charts.
5. `js/`: contains all the javascript files used for visualising the d3 svg(s), legends, and texts.

    a. `svg-charts/`: conatins the javascript files which create the multiple visualisations on the canvas.
    
    b. `utils/`: contains the javascript file containing functions which are commonly/repeatedly used to replicate charts multiple times.


**Expanded view of the Repository contents:**
```
D3.js-visualisation/
│   README.md
│   start_server.bash
│   start_server.bat
│   TargetImage.jpg
│
└───Code/
    │   index.html
    │   index.js
    │
    ├───assets/
    │       background.jpg
    │       image1.jpg
    │       image2.jpg
    │       image3.jpg
    │       image4.jpg
    │       image5.jpg
    │
    ├───css/
    │       style.css
    │
    └───js/
        │   config.js
        │   d3.v7.js
        │
        ├───svg-charts/
        │       chart-1.js
        │       chart-2.js
        │       chart-3.js
        │       chart-4.js
        │       chart-5.js
        │       chart-6.js
        │       chart-7.js
        │       chart-8.js
        │       footer-text.js
        │       header-text.js
        │
        └───utils/
                helper.js
```

## Setup:

### Pre-requisite:

1. **Python Installation:**

    _If Python is already installed, please skip this step. else continue._

    For Windows, MacOS & Linux:

    Visit the official Python downloads website ( [Downlaod Python Here](https://www.python.org/downloads/) ), and download and install latest Python by following instructions given on the website.

2. **Download the Project Code:**

    To download the project code follow either step-1 or step-2:

    1. _Clone the repository:_

        Clone the repository by executing the following command:

        ```
        git clone https://github.com/Zain-Saiyed/D3.js-visualisation.git

        cd D3.js-visualisation/
        ```

    2. _Download the repository as .zip:_

        - Click the green **"<> Code"** button on top right corner.
        - then, Click **"Download ZIP"**. 
        - Extract the zip file contents, and open the folder containing the extarcted files.

3. **Start the server:**

    _For Windows OS:_
    - Double click the `start_server.bat` file.

    _For MacOS / Linux based OS:_
    - On terminal run `./start_server.sh` script.

    _The above files will first start a Python HTTP server on `localhost:8000`. Secondly, open a browser navigating to `localhost:8000` to view the project's D3.js visualisations._

    _**NOTE:**_
    
    If in case the browser doesn't open automatically, then alternative solution is to manually open the browser, type `localhost:8000` on the top search bar and hit `Enter`. 

<!-- ## Brief about Interactivity: -->

## Reference Visualisation Inspiration:

![Reference Visualisation Inspiration](TargetImage.jpg)

## Implemented Visualisation:

![Implemented Visualisation](ActualImage.jpg)

---
