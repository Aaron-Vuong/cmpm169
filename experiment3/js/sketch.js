// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
let grid_size = 300;
let painted_points = {};
let y_increment = 0;
let x_increment = 0;

function setup() {

  // place our canvas, making it fit our container
  canvasContainer = $("#canvas-container");
  let canvas = createCanvas(500, 500);
  canvas.parent("canvas-container")
  // resize canvas is the page is resized
  $(window).resize(function() {
      console.log("Resizing...");
      resizeCanvas(canvasContainer.width(), canvasContainer.height());
  });
  
  var centerHorz = windowWidth / 2;
  var centerVert = windowHeight / 2;


  let current_color = color(0, 0, 0);
  brush = new Brush(0, 0, 0, 0, 2);
  // Every Square starts as white
  
  y_increment = (height - grid_size) / 10
  x_increment = (width - grid_size) / 10
  
  for (var x = 0; x <= width; x += x_increment) {
      for (var y = 0; y <= height - 100; y += y_increment) {
        painted_points[str(x) + "," + str(y)] = color(200, 255, 255);
      }
  }
  console.log("finished setup")
  let r_inp = createInput('0');
  let g_inp = createInput('0');
  let b_inp = createInput('0');
  r_inp.position(80, canvasContainer.height() * 2 + 145);
  g_inp.position(80, canvasContainer.height() * 2 + 170);
  b_inp.position(80, canvasContainer.height() * 2 + 195);
  r_inp.input(() => {
    brush.r = r_inp.value();
    brush.current_color = color(brush.r, brush.g, brush.b);
  });
    g_inp.input(() => {
    brush.g = g_inp.value();
    brush.current_color = color(brush.r, brush.g, brush.b);
  });
    b_inp.input(() => {
    brush.b = b_inp.value();
    brush.current_color = color(brush.r, brush.g, brush.b);
  });

  
}

function draw() {
    var centerHorz = canvasContainer.width() / 2 - 125;
    var centerVert = canvasContainer.height() / 2 - 125;
	background(255);
    fill(0);
    text('R', 10, height - 55);
    text('G', 10, height - 30);
    text('B', 10, height - 5);
	// Draw a grid.
	for (var x = 0; x <= width; x += (width - grid_size) / 10) {
		for (var y = 0; y <= height - 100; y += (height - grid_size) / 10) {
            fill(painted_points[str(x) + "," + str(y)]);
			rect(x, y, 20, 20);            
		}
	}
}

function findClosestSquare(x, y, squares) {
  let min_distance = width ** 2 + height ** 2;
  let closest_square = [0, 0];
  for (var s_key in squares) {
    let coords = s_key.split(',');
    let distance = Math.sqrt((coords[0] - x) ** 2 + (coords[1] - y) ** 2);
    
    if (distance < min_distance) {
      min_distance = distance;
      closest_square = coords;
    }
  }
  return closest_square;
}

function mouseClicked() {
  if (mouseY > height - 90) {return;}
  let closest_square = findClosestSquare(mouseX, mouseY, painted_points);
  brush.paintSquare(closest_square[0], closest_square[1], painted_points, x_increment, y_increment)
}
