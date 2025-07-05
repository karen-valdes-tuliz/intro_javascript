// Actividad 6 donde le pedimos al usuario que ingrese su edad para determinar si es menor o mayor de edad
const prompt = require("prompt-sync")();

//Le pedimos al usuario que ingrese su edad
let edad = parseFloat(prompt("¿Cuál es tu edad?: "));

//Depeniendo de la respuesta, verificamos si es mayor o menor
if (edad >= 18) {
    console.log(("Sos mayor de edad! Podes ingresar, bienvenido!"));
} else {
console.log("Lo siento, sos menor de edad y no te puedo permitir entrar.");
}