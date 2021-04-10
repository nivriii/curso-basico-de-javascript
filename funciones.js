// Declarativas

function miFuncion() {
    return 3;
}

miFuncion();

// Expresion 

var miFuncion = function(a, b) {
    return a + b;
}

miFuncion(2, 4);

// Template String

function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);
}

saludarEstudiante("Irving");