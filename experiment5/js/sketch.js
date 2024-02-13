// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}

// setup() function is called once when the program starts
function setup() {
    // place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height(), WEBGL);
    canvas.parent("canvas-container");
    // resize canvas is the page is resized
    $(window).resize(function() {
        console.log("Resizing...");
        resizeCanvas(canvasContainer.width(), canvasContainer.height());
    });
    angleMode(DEGREES);
    rectMode(CENTER);
    textAlign(CENTER);
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    background(0);
    pointLight(255, 255, 255, mouseX, mouseY, 0);
    push();
    for (let i = 0; i < canvasContainer.width() / 50; i++) {
      for(let j = 0; j < canvasContainer.height() / 50; j++){
      push();
      //translate(mouseX - width/2 + (i * 50), mouseY - height/2 + (j * 50))
      translate((-width/2) + (i * 50) + 25, (-height/2) + (j * 50) + 25);
      rotateX(frameCount * (sin(mouseX + 1)));
      rotateY(frameCount * (sin(mouseY + 1)));
      specularMaterial(80, 130, 250);
      box(sin(i + mouseX + mouseY) * 100);
      pop();
     }
    }
    pop();
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}