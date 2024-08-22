// Personaje de Tv
let nombre  = "Cay";
let animacion = "Rugla";
let edad = 16;

let personaje = {
    nombre:"Cay",
    animacion:"Rugla",
    edad:  16,
};

console.log(personaje);

console.log(personaje.nombre);

console.log(personaje ['animacion']);

personaje.edad = 13;

let llave = 'edad';
personaje [llave] = 16;

delete personaje.animacion;
console.log(personaje);