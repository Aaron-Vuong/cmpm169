// project.js - purpose and description here
// Author: Your Name
// Date:

class Brush {
  constructor(r, g, b, brush_size, softness) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.current_color = color(r, g, b);
    this.size = brush_size;
    // Softness indicates spread of a brush.
    if (softness <= 0) {softness = 1;}
    this.softness = softness;
  }
  
  paintSquare(x, y, painted_squares, x_increment, y_increment) {
    x_increment = int(x_increment);
    y_increment = int(y_increment);
    x = int(x);
    y = int(y);
    let current_strength = 1/this.softness;
    // Handle Softness
    for (let a = x - ((this.softness + this.size) * x_increment); a < x + ((this.softness + this.size) * x_increment); a += x_increment) {
      for (let b = y - ((this.softness + this.size) * y_increment); b < y + ((this.softness + this.size) * y_increment); b += y_increment) {
        let square_color = painted_squares[str(a) + "," + str(b)]
        if (a < 0 || b < 0 || a > width || b > height - 100){ continue; }
        
        painted_squares[str(a) + "," + str(b)] = lerpColor(square_color, this.current_color, current_strength);

      }
    }
    
    // Handle Size of the brush
    for (let a = x - (this.size * x_increment); a < x + (this.size * x_increment); a += x_increment) {
      for (let b = y - (this.size * y_increment); b < y + (this.size * y_increment); b += y_increment) {
        if (a < 0 || b < 0 || a > width || b > height - 100){ continue; }
        
        painted_squares[str(a) + "," + str(b)] = this.current_color;
      }
    }

  }
}