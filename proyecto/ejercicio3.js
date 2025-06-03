// En este ejercicio practicare la suma de dos numeros
const prompt =require("prompt-sync") ();

//Le pedimos el primer numero 
let numero1 = parseFloat(prompt("ingresa el primer numero: "));

//Le pedimos el segundo numero
let numero2 =parseFloat(prompt("ingresa el segundo numero: "));

//sumamos los dos numeros
let suma = numero1 + numero2

//Se le muestra el resultado
console.log(`la suma de ${numero1} + ${numero2} es: ${suma}`);
