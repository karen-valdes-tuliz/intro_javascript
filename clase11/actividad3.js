//Actividad 3 donde utilizamos el ciclo for para imprimir el resultado en la consola con el número que ingreso el usuario
const prompt = require ("prompt-sync")();

//Le pedimos al usuario que ingrese un número positivo
let numero = parseFloat(prompt("Ingrese un número: "));

//Se verifica si el número ingresado es positivo
if (numero > 0){

// Usamos el bucle for para imprimir los demás números hasta llegar al que fue ingresado por el usuario
for (let i = 1; i <= numero; i++) {
    console.log(i);    
}
} else {
  
}