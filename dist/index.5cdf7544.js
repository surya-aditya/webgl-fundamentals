function compileShader(gl1, shaderSource, shaderType) {
    // Create the shader object
    var shader = gl1.createShader(shaderType);
    // Set the shader source code.
    gl1.shaderSource(shader, shaderSource);
    // Compile the shader
    gl1.compileShader(shader);
    // Check if it compiled
    var success = gl1.getShaderParameter(shader, gl1.COMPILE_STATUS);
    if (!success) // Something went wrong during compilation; get the error
    throw "could not compile shader:" + gl1.getShaderInfoLog(shader);
    return shader;
}
function createProgram(gl1, vertexShader, fragmentShader) {
    // create a program.
    var program = gl1.createProgram();
    // attach the shaders.
    gl1.attachShader(program, vertexShader);
    gl1.attachShader(program, fragmentShader);
    // link the program.
    gl1.linkProgram(program);
    // Check if it linked.
    var success = gl1.getProgramParameter(program, gl1.LINK_STATUS);
    if (!success) // something went wrong with the link
    throw "program failed to link:" + gl1.getProgramInfoLog(program);
    return program;
}
function createShaderFromScript(gl1, scriptId, opt_shaderType) {
    // look up the script tag by id.
    var shaderScript = document.getElementById(scriptId);
    if (!shaderScript) throw "*** Error: unknown script element" + scriptId;
    // extract the contents of the script tag.
    var shaderSource = shaderScript.text;
    // If we didn't pass in a type, use the 'type' from
    // the script tag.
    if (!opt_shaderType) {
        if (shaderScript.type == "x-shader/x-vertex") opt_shaderType = gl1.VERTEX_SHADER;
        else if (shaderScript.type == "x-shader/x-fragment") opt_shaderType = gl1.FRAGMENT_SHADER;
        else if (!opt_shaderType) throw "*** Error: shader type not set";
    }
    return compileShader(gl1, shaderSource, opt_shaderType);
}
var shader = compileShaderFromScript(gl, "someScriptTagId");

//# sourceMappingURL=index.5cdf7544.js.map
