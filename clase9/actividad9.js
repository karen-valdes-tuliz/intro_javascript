//Actividad 9 donde calcularemos el área y perímetro de un circulo
const prompt = require("prompt-sync")();

//Primero definimos la constante PI
const PI = 3.14159;

//Le pedimos al usuario que ingrese el radio del circulo
let radio = parseFloat(prompt("Ingrese el radio del círculo: "));

//Luego calculamos el área y el perímetro
let area = PI * radio * radio;
let perimetro = 2 * PI * radio;

//Se le muestra los resultados al usuario
console.log(`El área del circulo es: ${area}`);
console.log(`El perímetro del círculo es: ${perimetro}`);