// En este ejercicio calculare el uso de variables y operadores aritmeticos
const prompt = require("prompt-sync")();

//le pido al usuario que ingrese un numero al azar

let numero = parseFloat (prompt("ingresa un numero al azar: "));

//calcular el doble de ese numero
let doble = numero * 2;

//se muestra el resultado
console.log (`el doble de ${numero} es: ${doble}`);

