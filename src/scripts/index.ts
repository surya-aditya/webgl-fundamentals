import {
  createProgram, 
  createShader, 
  resizeCanvasToDisplaySize, 
  setRectangle
} from "./utils/webgl"

import {
    Projection,
    Translate,
    Rotate,
    Scale
} from "./utils/webgl/m3"

import vertexShaderSource from './shaders/vertex.glsl'
import fragmentShaderSource from './shaders/fragment.glsl'

class App {

  canvas: HTMLCanvasElement
  gl: WebGLRenderingContext
  program: WebGLProgram
  vertex: WebGLShader
  fragment: WebGLShader
  positionAttributeLocation!: number
  positionBuffer!: WebGLBuffer
  resolutionUniformLocation: WebGLUniformLocation | any
  colorUniformLocation: WebGLUniformLocation | any
  matrixLocation: WebGLUniformLocation | any
  colorLocation!: number
  colorBuffer!: WebGLBuffer | null
  count: number | any
  offset: number | any
  primitiveType: any

  constructor() {
    
    // Get A WebGL context
    this.canvas = <HTMLCanvasElement> document.querySelector("#c")
    this.gl = <WebGLRenderingContext> this.canvas.getContext('webgl')
    
     // Get the strings for our GLSL shaders
     this.vertex = createShader(this.gl, vertexShaderSource, 'VERTEX')
     this.fragment = createShader(this.gl, fragmentShaderSource, 'FRAGMENT')
     
     // create GLSL shaders, upload the GLSL source, compile the shaders
     this.program = createProgram(this.gl, this.vertex, this.fragment)

    if (!this.gl) throw ("Canvas not found")
    
    this.setup()
  }

  setup() {     
    
    this.primitiveType = this.gl.TRIANGLES
    this.offset = 0
    this.count = 6
 
    // Link the two shaders into a program
    this.gl.useProgram(this.program)

    // look up where the vertex data needs to go.
    this.positionAttributeLocation = this.gl.getAttribLocation(this.program, "a_position")
    this.colorLocation = this.gl.getAttribLocation(this.program, "a_color")

    // uniforms
    this.resolutionUniformLocation = this.gl.getUniformLocation(this.program, "u_resolution")
    this.colorUniformLocation = this.gl.getUniformLocation(this.program, "u_color")    
    this.matrixLocation = this.gl.getUniformLocation(this.program, 'u_matrix')
    
    // Create a buffer and put three 2d clip space points in it
    this.positionBuffer = <WebGLBuffer> this.gl.createBuffer()
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer)
    // Set the geometry.
    this.setGeometry(this.gl)
    
    // Create a buffer for the colors.
    this.colorBuffer = <WebGLBuffer> this.gl.createBuffer()
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffer)
    // Set the colors.
    this.setColors(this.gl)

    // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer)

    var positions = [
      10, 20,
      80, 20,
      10, 50,
      10, 50,
      80, 20,
      80, 50,
    ]

    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW)


    this.render()
  }

  render() {
    resizeCanvasToDisplaySize(this.gl.canvas)
    
    // Tell WebGL how to convert from clip space to pixels
    this.gl.viewport(0, 0,this.gl.canvas.width, this.gl.canvas.height)

    // Clear the canvas.
    this.gl.clearColor(0, 0, 0, 0)
    this.gl.clear(this.gl.COLOR_BUFFER_BIT)

    // Tell it to use our program (pair of shaders)
    this.gl.useProgram(this.program)

    // Turn on the position attribute
    this.gl.enableVertexAttribArray(this.positionAttributeLocation)

    // Bind the position buffer.
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer)
    
    let size = 2
    let type = this.gl.FLOAT
    let normalize = false
    let stride = 0
    let offset = 0
    
    this.gl.vertexAttribPointer(
      this.positionAttributeLocation, size, type, normalize, stride, offset)
      
    // Turn on the color attribute
    this.gl.enableVertexAttribArray(this.colorLocation)

    // Bind the color buffer.
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffer)

    // Tell the color attribute how to get data out of colorBuffer (ARRAY_BUFFER)
    size = 4
    type = this.gl.FLOAT
    normalize = false
    stride = 0
    offset = 0
    this.gl.vertexAttribPointer(
        this.colorLocation, size, type, normalize, stride, offset)
    
    // set the resolution
    this.gl.uniform2f(this.resolutionUniformLocation, this.gl.canvas.width, this.gl.canvas.height)

    let translation = [200, 150]
    let angleInRadians = 0
    let scale = [1, 1]    

    let matrix: any = Projection(this.canvas.clientWidth, this.canvas.clientHeight)
    matrix = Translate(matrix, translation[0], translation[1])
    matrix = Rotate(matrix, angleInRadians)
    matrix = Scale(matrix, scale[0], scale[1])


    this.gl.uniformMatrix3fv(this.matrixLocation, false, matrix)
  
  }

  setGeometry(gl: WebGLRenderingContext) {

    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -150, -100,
        150, -100,
        -150,  100,
        150, -100,
        -150,  100,
        150,  100
      ]),
      gl.STATIC_DRAW)

    gl.uniform4f(this.colorUniformLocation, Math.random(), Math.random(), Math.random(), 1)

    gl.drawArrays(this.primitiveType, this.offset, this.count)
  }



  setColors(gl: WebGLRenderingContext) {
    // Pick 2 random colors.
    var r1 = Math.random()
    var b1 = Math.random()
    var g1 = Math.random()
   
    var r2 = Math.random()
    var b2 = Math.random()
    var g2 = Math.random()
   
    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(
          [ r1, b1, g1, 1,
            r1, b1, g1, 1,
            r1, b1, g1, 1,
            r2, b2, g2, 1,
            r2, b2, g2, 1,
            r2, b2, g2, 1]),
        gl.STATIC_DRAW)
  }

}

new App()
