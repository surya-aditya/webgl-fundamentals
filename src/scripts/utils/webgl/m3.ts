let MatType = Float32Array

/**
 * Sets the type this library creates for a Mat3
 * @param Ctor 
 * @returns 
 */
function setDefaultType(Ctor: Float32ArrayConstructor) {
  const OldType = MatType
  MatType = Ctor
  return OldType
}

/**
  * Takes two Matrix3s, a and b, and computes the product in the order
  * that pre-composes b with a.  In other words, the matrix returned will
  * @param a 
  * @param b 
  * @param dst 
  * @returns 
*/
function multiply(a: any[], b: any[], dst?: any) {
  dst = dst || new MatType(9)
  var a00 = a[0 * 3 + 0]
  var a01 = a[0 * 3 + 1]
  var a02 = a[0 * 3 + 2]
  var a10 = a[1 * 3 + 0]
  var a11 = a[1 * 3 + 1]
  var a12 = a[1 * 3 + 2]
  var a20 = a[2 * 3 + 0]
  var a21 = a[2 * 3 + 1]
  var a22 = a[2 * 3 + 2]
  var b00 = b[0 * 3 + 0]
  var b01 = b[0 * 3 + 1]
  var b02 = b[0 * 3 + 2]
  var b10 = b[1 * 3 + 0]
  var b11 = b[1 * 3 + 1]
  var b12 = b[1 * 3 + 2]
  var b20 = b[2 * 3 + 0]
  var b21 = b[2 * 3 + 1]
  var b22 = b[2 * 3 + 2]

  dst[0] = b00 * a00 + b01 * a10 + b02 * a20
  dst[1] = b00 * a01 + b01 * a11 + b02 * a21
  dst[2] = b00 * a02 + b01 * a12 + b02 * a22
  dst[3] = b10 * a00 + b11 * a10 + b12 * a20
  dst[4] = b10 * a01 + b11 * a11 + b12 * a21
  dst[5] = b10 * a02 + b11 * a12 + b12 * a22
  dst[6] = b20 * a00 + b21 * a10 + b22 * a20
  dst[7] = b20 * a01 + b21 * a11 + b22 * a21
  dst[8] = b20 * a02 + b21 * a12 + b22 * a22

  return dst
}

/**
 * Creates a 3x3 identity matrix
 * @param dst 
 * @returns 
 */
function identity(dst?: any) {
  dst = dst || new MatType(9)
  dst[0] = 1
  dst[1] = 0
  dst[2] = 0
  dst[3] = 0
  dst[4] = 1
  dst[5] = 0
  dst[6] = 0
  dst[7] = 0
  dst[8] = 1

  return dst
}

/**
 * Creates a 2D projection matrix
 * @param width 
 * @param height 
 * @param dst 
 * @returns 
 */
function projection(width: number, height: number, dst?: any) {
  dst = dst || new MatType(9)
  // Note: This matrix flips the Y axis so 0 is at the top.
  
  dst[0] = 2 / width
  dst[1] = 0
  dst[2] = 0
  dst[3] = 0
  dst[4] = -2 / height
  dst[5] = 0
  dst[6] = -1
  dst[7] = 1
  dst[8] = 1

  return dst
}

/**
 * Multiplies by a 2D projection matrix
 * @param m 
 * @param width 
 * @param height 
 * @param dst 
 * @returns 
 */
function project(m: any[], width: number, height: number, dst?: any) {
  return multiply(m, projection(width, height), dst)
}

/**
 * Creates a 2D translation matrix
 * @param {number} tx amount to translate in x
 * @param {number} ty amount to translate in y
 * @param {module:webgl-2d-math.Matrix4} [dst] optional matrix to store result
 * @return {module:webgl-2d-math.Matrix3} a translation matrix that translates by tx and ty.
 * @memberOf module:webgl-2d-math
*/
function translation(tx: any, ty: any, dst?: any) {
  dst = dst || new MatType(9)

  dst[0] = 1
  dst[1] = 0
  dst[2] = 0
  dst[3] = 0
  dst[4] = 1
  dst[5] = 0
  dst[6] = tx
  dst[7] = ty
  dst[8] = 1

  return dst
}

/**
 * Multiplies by a 2D translation matrix
 * @param {module:webgl-2d-math.Matrix3} the matrix to be multiplied
 * @param {number} tx amount to translate in x
 * @param {number} ty amount to translate in y
 * @param {module:webgl-2d-math.Matrix4} [dst] optional matrix to store result
 * @return {module:webgl-2d-math.Matrix3} the result
 * @memberOf module:webgl-2d-math
*/
function translate(m: any[], tx: any, ty: any, dst?: any) {    
  return multiply(m, translation(tx, ty), dst)
}

/**
 * Creates a 2D rotation matrix
 * @param {number} angleInRadians amount to rotate in radians
 * @param {module:webgl-2d-math.Matrix4} [dst] optional matrix to store result
 * @return {module:webgl-2d-math.Matrix3} a rotation matrix that rotates by angleInRadians
 * @memberOf module:webgl-2d-math
*/
function rotation(angleInRadians: number, dst?: any) {
  var c = Math.cos(angleInRadians)
  var s = Math.sin(angleInRadians)

  dst = dst || new MatType(9)

  dst[0] = c
  dst[1] = -s
  dst[2] = 0
  dst[3] = s
  dst[4] = c
  dst[5] = 0
  dst[6] = 0
  dst[7] = 0
  dst[8] = 1

  return dst
}

/**
   * Multiplies by a 2D rotation matrix
   * @param {module:webgl-2d-math.Matrix3} the matrix to be multiplied
   * @param {number} angleInRadians amount to rotate in radians
   * @param {module:webgl-2d-math.Matrix4} [dst] optional matrix to store result
   * @return {module:webgl-2d-math.Matrix3} the result
   * @memberOf module:webgl-2d-math
   */
function rotate(m: any[], angleInRadians: number, dst?: any) {
  return multiply(m, rotation(angleInRadians), dst)
}

/**
 * Creates a 2D scaling matrix
 * @param {number} sx amount to scale in x
 * @param {number} sy amount to scale in y
 * @param {module:webgl-2d-math.Matrix4} [dst] optional matrix to store result
 * @return {module:webgl-2d-math.Matrix3} a scale matrix that scales by sx and sy.
 * @memberOf module:webgl-2d-math
 */
function scaling(sx: any, sy: any, dst?: any) {
  dst = dst || new MatType(9)

  dst[0] = sx
  dst[1] = 0
  dst[2] = 0
  dst[3] = 0
  dst[4] = sy
  dst[5] = 0
  dst[6] = 0
  dst[7] = 0
  dst[8] = 1

  return dst
}

/**
 * Multiplies by a 2D scaling matrix
 * @param {module:webgl-2d-math.Matrix3} the matrix to be multiplied
 * @param {number} sx amount to scale in x
 * @param {number} sy amount to scale in y
 * @param {module:webgl-2d-math.Matrix4} [dst] optional matrix to store result
 * @return {module:webgl-2d-math.Matrix3} the result
 * @memberOf module:webgl-2d-math
 */
function scale(m: any[] | any, sx: any, sy: any, dst?: any) {
  return multiply(m, scaling(sx, sy), dst)
}

function dot(x1: number, y1: number, x2: number, y2: number) {
  return x1 * x2 + y1 * y2
}

function distance(x1: number, y1: number, x2: number, y2: number) {
  var dx = x1 - x2
  var dy = y1 - y2
  return Math.sqrt(dx * dx + dy * dy)
}

function normalize(x: number, y: number) {
  var l = distance(0, 0, x, y)
  if (l > 0.00001) {
    return [x / l, y / l]
  } else {
    return [0, 0]
  }
}

// i = incident
// n = normal
function reflect(ix: number, iy: number, nx: number, ny: number) {
  // I - 2.0 * dot(N, I) * N.
  var d = dot(nx, ny, ix, iy)
  return [
    ix - 2 * d * nx,
    iy - 2 * d * ny,
  ]
}

function radToDeg(r: number) {
  return r * 180 / Math.PI
}

function degToRad(d: number) {
  return d * Math.PI / 180
}

function transformPoint(m: number[], v: any[]) {
  var v0 = v[0]
  var v1 = v[1]
  var d = v0 * m[0 * 3 + 2] + v1 * m[1 * 3 + 2] + m[2 * 3 + 2]
  return [
    (v0 * m[0 * 3 + 0] + v1 * m[1 * 3 + 0] + m[2 * 3 + 0]) / d,
    (v0 * m[0 * 3 + 1] + v1 * m[1 * 3 + 1] + m[2 * 3 + 1]) / d,
  ]
}

function inverse(m: any[], dst?: any) {
  dst = dst || new MatType(9)

  const m00 = m[0 * 3 + 0]
  const m01 = m[0 * 3 + 1]
  const m02 = m[0 * 3 + 2]
  const m10 = m[1 * 3 + 0]
  const m11 = m[1 * 3 + 1]
  const m12 = m[1 * 3 + 2]
  const m20 = m[2 * 3 + 0]
  const m21 = m[2 * 3 + 1]
  const m22 = m[2 * 3 + 2]

  const b01 =  m22 * m11 - m12 * m21
  const b11 = -m22 * m10 + m12 * m20
  const b21 =  m21 * m10 - m11 * m20

  const det = m00 * b01 + m01 * b11 + m02 * b21
  const invDet = 1.0 / det

  dst[0] = b01 * invDet
  dst[1] = (-m22 * m01 + m02 * m21) * invDet
  dst[2] = ( m12 * m01 - m02 * m11) * invDet
  dst[3] = b11 * invDet
  dst[4] = ( m22 * m00 - m02 * m20) * invDet
  dst[5] = (-m12 * m00 + m02 * m10) * invDet
  dst[6] = b21 * invDet
  dst[7] = (-m21 * m00 + m01 * m20) * invDet
  dst[8] = ( m11 * m00 - m01 * m10) * invDet

  return dst
}

export {
  degToRad as DegreeToRadius,
  radToDeg as RadiusToDegree,
  distance as Distance,
  dot as Dot,
  identity as identity,
  inverse as Inverse,
  multiply as Multiply,
  normalize as Normalize,
  projection as Projection,
  reflect as reflect,
  rotation as Rotation,
  rotate as Rotate,
  scaling as Scaling,
  scale as Scale,
  transformPoint as TransformPoint,
  translation as Translation,
  translate as Translate,
  project as Project,
}
