//Actividad 9 donde se calcula el IMC
const prompt = require ("prompt-sync")();

//Le pedimos al usuario que ingrese su peso y su altura
let peso = parseFloat(prompt("Por favor, ingrese su peso en kilogramos: "));
let altura = parseFloat(prompt("Por favor, ahora ingrese su altura en metros (ejemplo: 1.60): "));

//Ingresamos la formula de conversión
let imc =peso /(altura * altura)

//Le mostramos el resultado al usuario
console.log(`Su IMC es: ${imc.toFixed(2)}`);

