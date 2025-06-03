// En este ejercicio practicare si un numero es par o impar
const prompt = require("prompt-sync")();

//Le solicitamos al usuario que ingrese un numero
let numero = parseInt(prompt("Ingrese un numero: "));

//Usamos el operador modulo para verificar si es par o impar
if (numero % 2 === 0) {
    console.log (`el numero ${numero} es par`);
} else {
console.log (`el numero ${numero} es impar`);
}

