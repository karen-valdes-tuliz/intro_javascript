//Actividad 6 donde se usa el ciclo for para hacer una tabala de múltiplicar
const prompt = require ("prompt-sync")();

//Se le pide al usuario que ingrese un número
let numero = parseFloat(prompt("Ingrese un número para ver su tabla de múltiplicar: "));

//Utilizamos el ciclo for para imprimir su tabla de múltiplicar
console.log(`Esta es la tabla de múltiplicar del ${numero}: `);
for (let i = 1; i <= 10; i++) {
let resultado = numero * i;
console.log(`${numero} x ${i} = ${resultado}`);
}