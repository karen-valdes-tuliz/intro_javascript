//Actividad 3 donde se declaran dos variables booleanas
const prompt = require("prompt-sync")();

//Le hacemos al usuario dos preguntas donde tiene que responder con true o false
let input1 = prompt("El día esta soleado? Por favor, responde con true o false: ");
let input2 = prompt("El día esta nublado? Por favor, responde con true o false: ");

// convertimos los textos a valor booleano
let condicion1 = (input1 === "true");
let condicion2 = (input2 === "true");

// Se le muestra al usuario los valores ingresados
console.log(`condicion1: ${condicion1}`);
console.log(`condicion2: ${condicion2}`);

//Diferentes combinaciones lógicas
console.log(`condicion1 && condicion2: ${condicion1 && condicion2}`);
console.log(`condicion1 || condicion2: ${condicion1 || condicion2}`);
console.log(`!condicion1: ${!condicion1}`);
console.log(`!condicion2: ${!condicion2}`);







