function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Modelo 3", 2020);
var autoNuevo2 = new auto("Tesla", "Modelo x", 2018);
var autoNuevo3 = new auto("Toyota", "Corola", 2020);

console.log(autoNuevo);
console.log(autoNuevo2);
console.log(autoNuevo3);