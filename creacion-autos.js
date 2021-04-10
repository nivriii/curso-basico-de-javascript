var marcas = ["Tesla", "Toyota", "Nissan"];
var modelos = ["Modelo1", "Modelo3", "Modelo3"];
var numeroAutosAGenerar = 30;
var autos = [];

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}


for (let i = 0; i < numeroAutosAGenerar; i++) {
    autos.push(
        new auto(
            marcas[ Math.floor ( Math.random() * marcas.length ) ],
            modelos[ Math.floor ( Math.random() * modelos.length ) ],
            Math.floor ( Math.random() * 20 ) + 2000
            )
        );
}

for (var auto of autos) {
    console.log(auto);
}