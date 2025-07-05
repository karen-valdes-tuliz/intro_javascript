//Actividad 10 donde mostramos a que día de la semana corresponde un número del 1 al 7
const prompt = require ("prompt-sync")();

//Le pedimos al usuario que ingrese un número del 1 al 7
let numero = parseFloat(prompt("Ingrese un número del 1 al 7: "));

//Verificamos el valor ingresado y mostramos el día correspondiente
if (numero === 1) {
    console.log("Ese número corresponde a: Lunes");
} else if (numero === 2) {
    console.log("Ese número corresponde a: Martes");
} else if (numero === 3) {
    console.log("Ese número corresponde a: Miercoles");
} else if (numero === 4) {
    console.log("Ese número corresponde a: Jueves");
} else if (numero === 5) {
    console.log("Ese número corresponde a: Viernes");
} else if (numero === 6) {
    console.log("Ese número corresponde a: Sabado");
} else if (numero === 7) {
    console.log("Ese número corresponde a: Domingo");
}