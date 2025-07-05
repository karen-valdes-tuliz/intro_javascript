//Actividad 2 donde le pedimos al usuario sus datos y le mostramos un mensaje personalizado
const prompt =require ("prompt-sync")();

//Le pedimos al usuario que ingrese su nombre
let nombre = prompt("Ingrese su nombre: ");

//Le pedimos su edad
let edad = prompt("Ingrese su edad: ");

//Le pedimos su peso en kilogramos 
let peso = prompt("Ingrese su su peso en kilogramos: ")

//Se le muestra el resultado con un mensaje personalizado
console.log(`Hola ${nombre}! Tenes ${edad} años y pesas ${peso} kg.`);

