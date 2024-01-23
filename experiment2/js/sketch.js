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
globalProgression = 0;
expanding = true;
playing = false;

function preload() {
    sound = loadSound('assets/Vanessa Carlton - A Thousand Miles.mp3');
}

function setup(){
  let cnv = createCanvas(400,400);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT([0.8], [512]);
  sound.amp(0.9);  
  
  // place our canvas, making it fit our container
  canvasContainer = $("#canvas-container");
  let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
  canvas.parent("canvas-container");
  // resize canvas is the page is resized
  $(window).resize(function() {
      console.log("Resizing...");
      resizeCanvas(canvasContainer.width(), canvasContainer.height());
  });
  
  var centerHorz = windowWidth / 2;
  var centerVert = windowHeight / 2;
}

function draw(){
  background("#132A13");
  var centerHorz = canvasContainer.width() / 2 - 125;
  var centerVert = canvasContainer.height() / 2 - 125;
  outerDynCircle = new DynamicCircle(width /2, height/2, 30, 3);  





  dynCircle = new DynamicCircle(width /2, height/2, 30, globalProgression);

  let fft_waveform = fft.waveform();
  dynCircle.plotCircle(new Array(360).fill(1), 0);
  dynCircle.plotCircle(fft_waveform, 0);
  outerDynCircle.plotCircle(fft_waveform, 0);
  if ((globalProgression >= 5 || !expanding) && playing) {
    globalProgression -= 0.01
    expanding = false;
  }
  if ((globalProgression <= 0.5 || expanding) && playing) {
    globalProgression += 0.01
    expanding = true;
  }
  stroke(255);
  text('tap to play', 20, 20);
}


function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
    // Stop expanding circles if the sound is not playing.
    playing = false;
  } else {
    sound.loop();
    playing = true;
  }
}