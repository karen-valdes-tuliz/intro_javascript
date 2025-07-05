//Actividad 4 donde registramos las notas de los estudiantes. Usamos el ciclo for, el array y las mostramos en la consola
const prompt =require ("prompt-sync")();

//Primero creamos una array vacío para las notas
let notas = [];

//Le preguntamos al usuario cuantas notas va a ingresar
let cantidad = parseFloat(prompt("¿Cuántas notas va a ingresar? ingrese el total a continuación: "));

//Usamos el ciclo for para ingresar uno por uno cada nota
for (let i = 0; i < cantidad; i++) {

//Pedimos cada nota
let nota =parseFloat(prompt(`Ingrese la nota del estudiante: ${i + 1}:`));

//Guardamos la nota en la array
notas [i] = nota;
}

//Mostramos todas las notas almacenadas
console.log("Estas son las notas ingresadas:");
for (let i = 0; i < notas.length; i++) {
    console.log(`Estudiante ${i + 1}: ${notas[i]}`);
    
}
