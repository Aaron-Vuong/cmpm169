// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
var x = 0;
let img;
const events = {}
const sample_images = [
"experiment7/images/hyper_training_plot_1_w_overfit.png",
"experiment7/images/Screenshot 2023-03-08 015045.png", 
"experiment7/images/Screenshot 2023-08-02 172839.png",
"experiment7/images/Screenshot 2023-09-23 163817.png", 
"experiment7/images/Screenshot 2023-12-17 132505.png", 
"experiment7/images/Screenshot_20230112_074834.png"
]

// setup() function is called once when the program starts
function setup() {
    // place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
    canvas.parent("canvas-container");
    // resize canvas is the page is resized
    $(window).resize(function() {
        console.log("Resizing...");
        resizeCanvas(canvasContainer.width(), canvasContainer.height());
    });
    let button = createButton('load image');
    button.parent("canvas-container");
    //button.position(canvasContainer.width(), canvasContainer.height());
    button.mousePressed(() => {
        img = loadImage(random(sample_images));
        console.log("Loading image");
    }); 
    canvas.drop(file => {
        loadImage("images/" + file.data);
        getEvents();
    });
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    background(220);
    t = text("Drop an image and see how long it took to load!", 50, 50);// canvasContainer.width() / 2, canvasContainer.height() / 2);
    getEvents();
    drawPerf();
}

function getEvents() {
    const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const request = entry.responseStart - entry.requestStart;
          if (request > 0) {
            if (!(entry.name in events || events[entry.name] == request)) {
                console.log("Hey");
                events[entry.name] = {"w": 0, "h": request * 1, "rotate": random(360), "red": request * 5, "request": request};
            }

          }
        });
    });
    observer.observe({ type: "resource", buffered: true });
}

function drawPerf() {
    push();
    x+= 0.001;
    translate(canvasContainer.width()/2, canvasContainer.height()/2);
    //request * 10, request * 10);
    rotate(x);
    for (const [key, value] of Object.entries(events)) {
        rotate(value.rotate);
        stroke(value.red, 150, 0);
        line(0, 0, value.w, value.h);
        text(round(value.request, 1) + " ms", value.w, value.h + 10);
    }
    pop();
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}