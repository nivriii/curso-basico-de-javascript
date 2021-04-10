var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

// FILTER

var articulosFiltrados = articulos.filter(
    function(articulo) {
        return articulo.costo <= 500;
    }
);

console.log(articulosFiltrados);

// MAP
var articulosMap = articulos.map(
    function(articulo) {
        return articulo.nombre;
    }
);

console.log(articulosMap);

// FIND
var articulosfind = articulos.find(
    function(articulo) {
        return articulo.nombre === "Audifonos";
    }
);

console.log(articulosMap);

// FOR EACH
articulos.forEach(
    function(articulo) {
        console.log(articulo.nombre);
    }
);

// SOME
var articulosBaratos = articulos.some(
    function(articulo) {
        return articulo.costo <= 700;
    }
);