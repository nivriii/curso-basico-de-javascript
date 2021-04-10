var usuario = "";
var opciones = ["piedra", "papel", "tijera"]

function jugar( opcionJugador ) {

    var opcionMaquina = opciones[ Math.floor(Math.random()*3) ];

    console.log(`${usuario} selecciono ${opcionJugador} y la maquina selecciono ${opcionMaquina}`);

    if (
        opcionJugador === opciones[0] && opcionMaquina === opciones[2] ||
        opcionJugador === opciones[1] && opcionMaquina === opciones[0] ||
        opcionJugador === opciones[2] && opcionMaquina === opciones[1]
        ) {
        return `${usuario} eres el ganador`
    } else if (opcionJugador === opcionMaquina) {
        return "Es un empate";
    } else {
        return "La maquina gana";
    }
}

function iniciarJuego() {
    usuario = prompt("¿Cúal es tú nombre?")
    console.log( jugar( prompt("Seleccion tu opcion a jugar: piedra, papel o tijera").toLowerCase() ) );
}

iniciarJuego();