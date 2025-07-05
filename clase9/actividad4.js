//Actividad 4 donde se declara una variable nombre
const prompt = require ("prompt-sync")();

//Declaramos la variable nombre
const miNombre = "karen"

//Le pedimos al usuario que ingrese su nombre
let nombre = prompt("Ingrese su nombre: ")

//Se comparan ambos nombres
if (nombre === miNombre) {
    console.log("Tenemos el mismo nombre!");
} else {
    console.log("No tenemos el mismo nombre");
}