precision mediump float;

uniform vec4 u_color;

varying vec4 v_color;

void main() {
  // gl_FragColor is a special variable a fragment shader
  // is responsible for setting

  gl_FragColor = v_color; 
}