/**
 * Create
 */
function createShader(gl: any, shaderSource: string, shaderType: string) {
  if (!shaderSource) throw("*** Error: Unable to load source: " + shaderSource)

  // If we didn't pass in a type, use the 'type' from the script tag.
  if (shaderType === 'VERTEX') {
    shaderType = gl.VERTEX_SHADER
  } else if (shaderType === 'FRAGMENT') {
    shaderType = gl.FRAGMENT_SHADER
  } else if(shaderType !== 'VERTEX' || 'FRAGMENT'){
    throw("*** Error: unknown shader type: " + shaderSource)
  } else {
    throw("*** Error: shader type not set: " + shaderSource)
  }
  
  return compileShader(gl, shaderSource, shaderType)
}

function createProgram(gl: any, vertexShader: any, fragmentShader: any) {
  // Create the shader object
  const program = gl.createProgram()

  // attach the shaders.
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)

  // link the program.
  gl.linkProgram(program)

  // something went wrong with the link
  if (!gl.getProgramParameter(program, gl.LINK_STATUS))throw ("program failed to link:" + gl.getProgramInfoLog (program))

  return program
}

/**
 * Compile
 */
function compileShader(gl: any, shaderSource: string, shaderType: string) {
  
  let shader = gl.createShader(shaderType)
  
    // Set the shader source code.
  gl.shaderSource(shader, shaderSource)
  
  // Compile the shader
  gl.compileShader(shader)

  // Check if it compiled
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw "could not compile shader:" + gl.getShaderInfoLog(shader)
  
  return shader
}

/**
 * Resize a canvas to match the size its displayed.
 */

function resizeCanvasToDisplaySize(canvas: any, multiplier?: number) {
  multiplier = multiplier || 1

  const width  = canvas.clientWidth  * multiplier | 0
  const height = canvas.clientHeight * multiplier | 0

  if (canvas.width !== width ||  canvas.height !== height) {
    canvas.width  = width
    canvas.height = height
    return true
  }
  return false
}

// Fills the buffer with the values that define a rectangle.
function setRectangle(gl:WebGLRenderingContext, x:number, y:number, width:number, height:number) {
  let x1 = x
  let x2 = x + width
  let y1 = y
  let y2 = y + height
 
  // NOTE: gl.bufferData(gl.ARRAY_BUFFER, ...) will affect
  // whatever buffer is bound to the `ARRAY_BUFFER` bind point
  // but so far we only have one buffer. If we had more than one
  // buffer we'd want to bind that buffer to `ARRAY_BUFFER` first.
 
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
     x1, y1,
     x2, y1,
     x1, y2,
     x1, y2,
     x2, y1,
     x2, y2]), gl.STATIC_DRAW)
}

export {
  createProgram,
  createShader,
  compileShader,
  resizeCanvasToDisplaySize,
  setRectangle
}