//Actividad 4 donde vamos a indicar si un número es par o impar
const prompt = require ("prompt-sync")();

//Le pedimos al usuario que ingrese un número para determinar si es par o impar
let numero = parseFloat(prompt("Ingrese un número: "))

//Verificamos si el número ingresado es par o impar
if (numero % 2 === 0) {
    console.log(`El número ${numero} es: ¡Par!. Ya que se lleva bien con el 2 y no quiere separarse 🤣 `);
} else {
    console.log(`El número ${numero} es: ¡Impar!. Se separo del 1 y no lo quiere ver más 😢`);
}