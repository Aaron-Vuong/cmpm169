// project.js - purpose and description here
// Author: Your Name
// Date:

// NOTE: This is how we might start a basic JavaaScript OOP project

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file

// define a class
class DynamicCircle {
  constructor(x, y, amplitude, inner_radius) {
    this.center_x = x;
    this.center_y = y;
    this.amplitude = amplitude;
    this.inner_radius = inner_radius;
  }
  // Use SOHCAHTOA to plot the point correctly.
  plotPoint(angleDeg, length) {
    let x = (cos(angleDeg) * (length + this.inner_radius) * this.amplitude) + this.center_x;
    let y = (sin(angleDeg) * (length + this.inner_radius) * this.amplitude) + this.center_y;
    return [x,y];
  }
  
  plotCircle(points, starting_index) {
    noFill();
    beginShape();
    strokeWeight(1.5);
    let arr = []
    for (let i = starting_index; i < points.length; i++){
      let point_array = this.plotPoint(i, points[i]);
      append(arr, point_array)
      stroke(point_array[0], point_array[1], points[i] * this.amplitude); 
      point(point_array[0], point_array[1]);
    }
    endShape(CLOSE);
  }

}

// let's get this party started - uncomment me
//main();
