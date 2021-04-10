var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

// FOR
for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiante(estudiantes[i]);
}

// FOR OF
for (var estudiante of estudiantes) {
    saludarEstudiante(estudiante);
}