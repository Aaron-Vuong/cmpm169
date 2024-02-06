
attribute vec3 aPosition;

// Always include this to get the position of the pixel and map the shader correctly onto the shape

attribute vec2 aTexCoord;

// This is a varying variable, which in shader terms means that it will be passed from the vertex shader to the fragment shader
varying vec2 vTexCoord;

void main() {
  vTexCoord = aTexCoord;
  vec4 positionVec4 = vec4(aPosition, 1.0);

  // Scale to make the output fit the canvas
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0; 

  // Send the vertex information on to the fragment shader
  gl_Position = positionVec4;
}