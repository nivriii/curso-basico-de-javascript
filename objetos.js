var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,

    detallesAuto: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

miAuto.marca; // Toyota
miAuto.detallesAuto();