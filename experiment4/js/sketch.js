// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

function preload() {
    // load the shader
    loadedShader = loadShader('assets/shading.vert', 'assets/shading.frag');
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
    noStroke();
    capture = createCapture(VIDEO);
    capture.size(200, 200);
    capture.hide();
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    background(220);
    // shader() sets the active shader with our shader
    shader(loadedShader);
    
    // Send the image to the shader
    loadedShader.setUniform("tex0", capture);
    // Send the window height.
    loadedShader.setUniform('u_resolution', [width, windowHeight]);
  
    // rect gives us some geometry on the screen
    rect(0,0,width, height);
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}