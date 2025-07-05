//Actividad 5 donde le pedimos al usuario 3 números y le indicamos cúal es el número mayor
const prompt = require ("prompt-sync")();

//Pedimos al usuario que ingrese tres números
let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));
let num3 = parseFloat(prompt("Ingrese el tercer número: "));

//Se comparan los números para saber cuál es el mayor
let mayor;

if (num1 >= num2 && num1 >= num3) {
    mayor = num1;  
}else if (num2 >= num1 && num2 >= num3){
    mayor = num2;
}else {
    mayor = num3;
}

//Se muestra el resultado al usuario
console.log(`El número mayor es: ${mayor}`);

