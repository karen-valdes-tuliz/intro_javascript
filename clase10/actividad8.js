// Actividad 8 donde se convierte una tempratura de celsius a fahrenheit
const prompt = require ("prompt-sync")();

//Le pedimos la usuario que ingrese la temperatura
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

// Ingresamos la fórmula de conversión
let fahrenheit = celsius * 9/5 + 32;

//Se le muestra el resultado al usuario
console.log(`La temperatura en Fahrenheit es: ${fahrenheit}`);


