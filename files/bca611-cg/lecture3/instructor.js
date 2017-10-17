var vertexPositionAttribute = null,
    trianglesVerticeBuffer = null,
    vertexColorAttribute = null,
    trianglesColorBuffer = null,
    triangleVerticesIndexBuffer = null;

var mvMatrix = mat4.create(),
    pMatrix = mat4.create();

var angle = 0.01,
    camera_x = 0,
    camera_x_translation = 0.01,
    cameraPosition;

var lookAtPosition = [1.0, 2.0, 0.0];

var globalUp = [0, 1, 0];

window.init = function(){
    setupBuffers();
    getMatrixUniforms();
}

window.update = function(){
    clearScene();

    animateCameraPosition();

    calculateViewMatrix(lookAtPosition, cameraPosition, globalUp);

    setMatrixUniforms();
    
    drawScene();
}

function calculateViewMatrix(at, eye, up){
    n = math.subtract(eye, at);
    n = math.divide(n, math.norm(n));
    u = math.cross(up, n);
    u = math.divide(u, math.norm(u));
    v = math.cross(n, u);

    eyeDotU = -math.dot(eye, u);
    eyeDotV = -math.dot(eye, v);
    eyeDotN = -math.dot(eye, n);
    
    u.push(eyeDotU);
    v.push(eyeDotV);
    n.push(eyeDotN);

    mvMatrix = mat4.fromValues(u[0], u[1], u[2], u[3], v[0], v[1], v[2], v[3], n[0], n[1], n[2], n[3], 0, 0, 0, 1);
    mvMatrix = mat4.transpose(mvMatrix, mvMatrix);
}

function animateCameraPosition(){
    
    if(camera_x > 1.7){
        camera_x_translation = -0.01;
    }else if(camera_x < -1.7){
        camera_x_translation = 0.01
    }

    cameraPosition = [camera_x, 3, -7];
    camera_x += camera_x_translation;

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
    var triangleVerticeColors = [ 
        //front face	
         0.0, 0.0, 1.0,
         1.0, 1.0, 1.0,
         0.0, 0.0, 1.0,
         0.0, 0.0, 1.0,
         0.0, 0.0, 1.0,
         1.0, 1.0, 1.0,
    
        //rear face
         0.0, 1.0, 1.0,
         1.0, 1.0, 1.0,
         0.0, 1.0, 1.0,
         0.0, 1.0, 1.0,
         0.0, 1.0, 1.0,
         1.0, 1.0, 1.0
    ];

    trianglesColorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesColorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVerticeColors), gl.STATIC_DRAW);	

    //12 vertices
    var triangleVertices = [ 
        //front face
        //bottom left to right,  to top
        0.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        2.0, 0.0, 0.0,
        0.5, 1.0, 0.0,
        1.5, 1.0, 0.0,
        1.0, 2.0, 0.0,
        
        //rear face
        0.0, 0.0, -2.0,
        1.0, 0.0, -2.0,
        2.0, 0.0, -2.0,
        0.5, 1.0, -2.0,
        1.5, 1.0, -2.0,
        1.0, 2.0, -2.0
    ];
    
    trianglesVerticeBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesVerticeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);		

    //setup vertice buffers
    //18 triangles
    var triangleVertexIndices = [ 
        //front face
        0,1,3,
        1,3,4,
        1,2,4,
        3,4,5,
        
        //rear face
        6,7,9,
        7,9,10,
        7,8,10,
        9,10,11,
        
        //left side
        0,3,6,
        3,6,9,
        3,5,9,
        5,9,11,
        
        //right side
        2,4,8,
        4,8,10,
        4,5,10,
        5,10,11,

        //bottom faces
        0,6,8,
        8,2,0
    ];
    triangleVerticesIndexBuffer = gl.createBuffer();
    triangleVerticesIndexBuffer.number_vertex_points = triangleVertexIndices.length;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, triangleVerticesIndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(triangleVertexIndices), gl.STATIC_DRAW);		
}

function drawScene()
{
    vertexPositionAttribute = gl.getAttribLocation(glProgram, "aVertexPosition");
    gl.enableVertexAttribArray(vertexPositionAttribute);
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesVerticeBuffer);
    gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

    vertexColorAttribute = gl.getAttribLocation(glProgram, "aVertexColor");
    gl.enableVertexAttribArray(vertexColorAttribute);
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesColorBuffer);
    gl.vertexAttribPointer(vertexColorAttribute, 3, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, triangleVerticesIndexBuffer);  
    gl.drawElements(gl.TRIANGLES, triangleVerticesIndexBuffer.number_vertex_points, gl.UNSIGNED_SHORT, 0);
}

function getMatrixUniforms(){
    glProgram.pMatrixUniform = gl.getUniformLocation(glProgram, "uPMatrix");
    glProgram.mvMatrixUniform = gl.getUniformLocation(glProgram, "uMVMatrix");          
}

function setMatrixUniforms() {
    gl.uniformMatrix4fv(glProgram.pMatrixUniform, false, pMatrix);
    gl.uniformMatrix4fv(glProgram.mvMatrixUniform, false, mvMatrix);
}