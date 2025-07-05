// Actividad 1 donde se trabajara con números y su clasificación. Dependiendo el número, este sera positivo, negativo o cero
const prompt = require ("prompt-sync")();

//Se le pide al usuario que ingrese un número
let numero = parseFloat(prompt("Ingrese un número: "));

//Indicaremos si el número ingresado es positivo, negativo o igual a cero
if (numero > 0) {
    console.log("El número ingresado es positivo");
} else if (numero < 0) {
    console.log("El número ingresado es negativo");
} else {
    console.log("El número ingresado es cero");
    
}