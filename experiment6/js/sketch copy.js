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
let adjectives = ["big", "fat", "small", "skinny", "smart", "sturdy", "red", "lucky"]
let nouns = ["dog", "cat", "mouse", "house", "ball", "toy", "fish", "bed", "blanket", "pillow", "chair"]
let verbs = ["run", "sit", "spoke", "stood", "play", "jump"]
let input;
let sample_text;
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
    input=createInput();
    sample_text = str(adjectives[int(random(adjectives.length))]) + " " + str(nouns[int(random(nouns.length))]) + " " + str(verbs[int(random(verbs.length))])
    
    var centerHorz = windowWidth / 2;
    var centerVert = windowHeight / 2;
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    background(100);
    for (let i = 0; i < windowWidth; i += 50) {
      for (let j = 0; j < windowHeight; j += random(30, 50)) {
        if (input.value() == "") {
          text(sample_text, (frameCount + i) % windowWidth - 50, (frameCount + j) % windowHeight);
        }
        else {
          text(input.value(), (frameCount + i) % windowWidth - 50, (frameCount + j) % windowHeight);
        }
      }
    }
}