// Actividad 2 donde hacemos un análisis y modificamos cadenas de texto
const prompt = require("prompt-sync")();

// Le pedimos al usuario que ingrese una oración 
let oracion = prompt("Ingresa una oración: ");

// Creamos la función procesarOracion
function procesarOracion(texto) {
    let oracionSinEspacio = texto.trim(); // Quitamos espacios
    let palabras = oracionSinEspacio.split(/\s+/); // Dividimos en palabras

    // Reemplazamos todas las 'a' por '@'
    let oracionReemplazada = oracionSinEspacio.replace(/a/g, '@');

    // Buscamos la posición de la primera aparición de "JavaScript"
    let posicionJavaScript = oracionSinEspacio.toLowerCase().indexOf('javascript');

    // Construimos una nueva cadena con las palabras separadas por guiones usando reduce()
    let oracionConGuiones = palabras.reduce((acumulador, palabra, indice) => {
        if (indice === 0) {
            return palabra;
        } else {
            return acumulador + '-' + palabra;
        }
    }, '');

    // Mostramos todos los resultados en la consola
    console.log('\n Resultado del análisis:');
    console.log(`Oración sin espacios: "${oracionSinEspacio}"`);
    console.log(`Palabras:`, palabras);
    console.log(`Oración con "a" reemplazada: "${oracionReemplazada}"`);
    console.log(`Posición de "javascript": "${posicionJavaScript}"`);
    console.log(`Oración con guiones: "${oracionConGuiones}"`);
}

// Usamos la consola para ejecutar la oración ingresada
procesarOracion(oracion);
