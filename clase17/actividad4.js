// Ejercicio 4: Transformación y Análisis de Cadenas
const prompt = require("prompt-sync")();

// Le pedimos al usuario que ingrese una lista de nombres separados por comas
let entrada = prompt("Ingresa los nombres separados por comas: ");

//Usamos una función que transforma y analiza los nombres
function transformarYAnalizarNombres(texto) {

//Separamos la cadena en un array y quitamos espacios en cada nombre
let nombres = texto.split(",").map(nombre => nombre.trim());

//Verificamos si existe el nombre "Juan"
let existeJuan = nombres.includes("Juan");

//Reemplazamos todos los nombres "Maria" por "Ana"
nombres = nombres.map(nombre => nombre === "Maria" ? "Ana" : nombre);

//Encontramos el índice del nombre "Pedro"
let indicePedro = nombres.indexOf("Pedro");

//Ordenamos los nombres alfabéticamente
nombres.sort();

// Construimos la cadena con reduce separando con puntos
let nombresOrdenados = nombres.reduce((acum, nombre, i) => {
  return i === 0 ? nombre : acum + "." + nombre;
});


// Mostramos los resultados
console.log("¿Existe Juan?:", existeJuan);
console.log("Índice de Pedro:", indicePedro);
console.log("Nombres ordenados:", nombresOrdenados);

}

// Ejecutamos la función con la entrada del usuario
transformarYAnalizarNombres(entrada);

