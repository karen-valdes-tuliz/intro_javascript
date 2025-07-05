//Actividad 5 donde se solicita que el usuario ingrese 5 nombres y que se almacene en la array. Luego hay que verificar si tal nombre esta en la array. Usamos array, ciclo for y condicionales
const prompt =require ("prompt-sync")();

//Creamos un array vacío para los nombres
let nombres = [];

//Usamos el ciclo for para pedirle al usuario que ingrese los 5 nombres y poder guardarlos en la array
for (let i = 0; i < 5; i++){
    let nombre = prompt(`Ingrese el nombre ${i + 1}: `);
    nombres [i] = nombre;
}

//Le pedimos al usuario que ingrese un nombre para buscar si esta en el array
let nombreBuscado =prompt("Ingrese un nombre para verificar si está en la lista: ");

//Creamos una variable booleana para saber si lo encontramos
let encontrado = false

//Recorremos el array para buscar el nombre utilizando el ciclo for
for (let i = 0; i < nombres.length; i++){
    if (nombres[i] === nombreBuscado) {
        encontrado = true
        break;
    }
}

//Se muestra el resultado en la consola
if (encontrado) {
    console.log(`✅ El nombre "${nombreBuscado}" sí esta en la lista`);
} else {
    console.log(`⛔ El nombre "${nombreBuscado}" no esta en la lista`);
    
}
