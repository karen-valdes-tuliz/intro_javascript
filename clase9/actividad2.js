//Actividad 2 donde se define dos constantes con valores númericos
const prompt = require("prompt-sync")();

//Primero definimos las dos constantes con su rango
const RANGO_MINIMO = 20
const RANGO_MAXIMO = 100
//Se le pide al usuario que ingrese un número
let numero = parseFloat(prompt("Ingrese un número: "))
//Se verifica si el número ingresado está dentro del rango máximo o mínimo
if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    console.log(`El número que fue ingresado: ${numero} está dentro del rango permitido (${RANGO_MINIMO} a ${RANGO_MAXIMO}.)`);
} else {
    console.log(`El número que fue ingresado: ${numero} está fuera del rango permitido (${RANGO_MINIMO} a ${RANGO_MAXIMO})`);
}