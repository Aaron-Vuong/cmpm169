#ifdef GL_ES
precision mediump float;
#endif
varying vec2 vTexCoord;
uniform vec2 u_resolution; // This is passed in as a uniform from the sketch.js file
uniform sampler2D tex0;

void main() {
  vec2 uv = vTexCoord;
  // position of the pixel divided by resolution, to get normalized positions on the canvas
  vec2 st = gl_FragCoord.xy/u_resolution.xy; 

  vec3 color = texture2D(tex0, vec2(uv.x, 1.0 - uv.y)).xyz;

  gl_FragColor = vec4(color.x + 0.3,color.y + 0.2,color.z + 0.7,1.0);

}