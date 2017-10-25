var vertexPositionAttribute = null,
    cubeVerticesBuffer = null,
    vertexColorAttribute = null,
    cubeColorBuffer = null,
    cubeVerticesIndexBuffer = null;

var mvMatrix = mat4.create(),
    viewMatrix = mat4.create(),
    modelMatrix = mat4.create(),
    pMatrix = mat4.create(),
    RyMatrix = mat4.create(),
    RzMatrix = mat4.create(),
    RxMatrix = mat4.create();

var angleX=0,
    angleY=0,
    angleZ = 0,
    camera_x = 0,
    camera_x_translation = 0.01,
    cameraPosition;

var lookAtPosition = [0.5, 0.5, 0.5];

var globalUp = [0, 1, 0];

window.init = function(){
    setupBuffers();
    getMatrixUniforms();
}

window.update = function(){
    clearScene();

    calculateModelViewMatrix();

    setMatrixUniforms();
    
    drawScene();
}

function calculateViewMatrix(){
    var cameraTransX = 0;
    var cameraTransY = 0;
    var cameraTransZ = 3;

    viewMatrix = mat4.fromValues(
                    1,0,0,-cameraTransX,
                    0,1,0,-cameraTransY,
                    0,0,1,-cameraTransZ,
                    0,0,0,1
                );

    mat4.transpose(viewMatrix, viewMatrix);
}

function calculateModelMatrix(){

    var str = "";

    mat4.identity(modelMatrix);
    
    angleX += 1;
    RxMatrix = mat4.fromValues(
                                1,0,0,0,
                                0, math.cos(math.unit(angleX,'deg')), -math.sin(math.unit(angleX,'deg')), 0,
                                0, math.sin(math.unit(angleX,'deg')), math.cos(math.unit(angleX,'deg')), 0,
                                0,0,0,1
                            );

    RxMatrix = mat4.transpose(RxMatrix, RxMatrix);
    str += "angleX : " + angleX +"<br>";
   // mat4.identity(RxMatrix);

    angleY = 90;  
    RyMatrix = mat4.fromValues(
                                math.cos(math.unit(angleY,'deg')),0,math.sin(math.unit(angleY,'deg')),0,
                                0,1,0,0,
                                -math.sin(math.unit(angleY,'deg')),0, math.cos(math.unit(angleY,'deg')), 0,
                                0,0,0,1
                            );

    RyMatrix = mat4.transpose(RyMatrix, RyMatrix);

    str += "angleY : " + angleY +"<br>";
  //  mat4.identity(RyMatrix);
    

    angleZ -= 1;
    RzMatrix = mat4.fromValues(
                                math.cos(math.unit(angleZ,'deg')), -math.sin(math.unit(angleZ,'deg')), 0, 0,
                                math.sin(math.unit(angleZ,'deg')), math.cos(math.unit(angleZ,'deg')), 0, 0,
                                0,0,1,0,
                                0,0,0,1
                            );

    RzMatrix = mat4.transpose(RzMatrix, RzMatrix);
    //mat4.identity(RzMatrix);  
  
    str += "angleZ : " + angleZ;

    printToScreen(str);

 //modelMatrix = Rz*Ry*Rx
 //Forms modelMatrix for Euler rotation in XYZ order
 //Since we rotate around y with 90 degrees, rotation around x and z axis gives rotation around the same axis.
  modelMatrix = mat4.multiply(modelMatrix, modelMatrix, RzMatrix);
  modelMatrix = mat4.multiply(modelMatrix, modelMatrix, RyMatrix) ;  
  modelMatrix = mat4.multiply(modelMatrix, modelMatrix, RxMatrix) ;
    
}

function calculateModelViewMatrix(){

    mat4.identity(mvMatrix);
    calculateViewMatrix();
    calculateModelMatrix();
    mvMatrix = mat4.multiply(mvMatrix,viewMatrix,modelMatrix);

}

function clearScene()
{
    gl.clearColor(0.0, 0.0, 0.0, 1.0); 	
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    
    
    gl.viewport(0, 0, canvas.width, canvas.height);
    mat4.perspective(pMatrix, 45, canvas.width / canvas.height, 0.1, 100.0);
}

function setupBuffers()
{
    var cubeVertices = [

        //bottomFace
      -0.5,-0.5,-0.5,
      0.5,-0.5,-0.5,
      -0.5,-0.5,0.5,
      0.5,-0.5,-0.5,
      -0.5,-0.5,0.5,
      0.5,-0.5,0.5,

      //rightFace
      0.5,-0.5,-0.5,
      0.5,-0.5,0.5,
      0.5,0.5,0.5,
      0.5,-0.5,-0.5,
      0.5,0.5,0.5,
      0.5,0.5,-0.5,

      //topFace
      0.5,0.5,0.5,
      -0.5,0.5,0.5,
      0.5,0.5,-0.5,
      -0.5,0.5,0.5,
      -0.5,0.5,-0.5,
      0.5,0.5,-0.5,

    //rearFace
    -0.5,-0.5,0.5,
    0.5,-0.5,0.5,
    0.5,0.5,0.5,
    -0.5,-0.5,0.5,
    0.5,0.5,0.5,
    -0.5,0.5,0.5,
   
    //frontFace
    0.5,-0.5,-0.5,
    0.5,0.5,-0.5,
    -0.5,0.5,-0.5,
    -0.5,-0.5,-0.5,
    0.5,-0.5,-0.5,
    -0.5,0.5,-0.5,

    //leftFace
    -0.5,-0.5,-0.5,
    -0.5,-0.5,0.5,
    -0.5,0.5,0.5,
    -0.5,-0.5,-0.5,
    -0.5,0.5,0.5,
    -0.5,0.5,-0.5
    
    ];
    cubeVerticesBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cubeVertices), gl.STATIC_DRAW);	


     var cubeVertexColors = [

        //bottomFace
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,

        //rightFace
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,


        //topFace
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,

        //rearFace
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        
        //frontFace
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,

        //leftFace
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0


     ];

    cubeColorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeColorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cubeVertexColors), gl.STATIC_DRAW);	

}

function drawScene()
{
    vertexPositionAttribute = gl.getAttribLocation(glProgram, "aVertexPosition");
    gl.enableVertexAttribArray(vertexPositionAttribute);
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesBuffer);
    gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

    vertexColorAttribute = gl.getAttribLocation(glProgram, "aVertexColor");
    gl.enableVertexAttribArray(vertexColorAttribute);
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeColorBuffer);
    gl.vertexAttribPointer(vertexColorAttribute, 3, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, 0, 36);
}

function getMatrixUniforms(){
    glProgram.pMatrixUniform = gl.getUniformLocation(glProgram, "uPMatrix");
    glProgram.mvMatrixUniform = gl.getUniformLocation(glProgram, "uMVMatrix");          
}

function setMatrixUniforms() {
    gl.uniformMatrix4fv(glProgram.pMatrixUniform, false, pMatrix);
    gl.uniformMatrix4fv(glProgram.mvMatrixUniform, false, mvMatrix);
}