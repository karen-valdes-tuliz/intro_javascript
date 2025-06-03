//En este ejercicio practicare si un numero es positivo, negativo o cero
const prompt = require("prompt-sync")();



//1 Se le pide al usuario que ingrese un numero
let numero = parseInt(prompt("ingrese un numero: "));

// Verifique si ese numero es positivo, negativo o igual a cero y Mostrar un mensaje acorde del resultado
if (numero > 0){
console.log(`el numero ${numero} es positivo`);
} else if (numero < 0) {
console.log(`el numero ${numero} es negativo`);
} else {
console.log("el numero es igual a cero");
}

