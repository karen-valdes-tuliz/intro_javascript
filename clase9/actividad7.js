//Actividad 7 donde le pedimos al usuario que ingrese su peso en kilogramos.
const prompt = require ("prompt-sync")();

//Le pedimos al usuario que ingrese su peso en kilogramos
let pesoKg = parseFloat(prompt("Ingrese su peso en kilogramos: "));

//Una vez obtenido el peso, hacemos la conversión de kilogramos a lobras
let pesoLb = pesoKg *2.20462;

//Se le muestra el resultado al usuario
console.log("Su peso en libras es: " +pesoLb);

