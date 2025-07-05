//Actividad 1 donde se declara dos variables númericas
const prompt = require("prompt-sync")();

//Se le pide a el usuario que ingrese el primer número
let numero1 = parseFloat(prompt("Ingrese el primer número: "));

//Se le vuelve a pedir a el usuario que ingrese otro número
let numero2 =parseFloat(prompt("Ingrese el segundo número: "));

//Se comparan ambos números para saber cuál es el mayor y cuál es el menor
if (numero1 > numero2) {
    console.log(`El número ${numero1} es mayor que ${numero2}`);
} else if (numero1 < numero2){
    console.log(`El número ${numero2} es mayor que ${numero1}`);
} else {
    console.log("Ambos números son iguales");
}
