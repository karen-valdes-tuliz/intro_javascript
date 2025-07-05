// Actividad 3 donde vamos a crear dos constantes
const prompt =require ("prompt-sync")();

//Declaro dos constantes
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

//Le pido al usuario que ingrese su edad:
let inputEdad = prompt("Ingrese su edad: ");

//Se convierte lo ingresado a un número entero
let edad = parseInt (inputEdad);

//Validamos si la edad ingresada esta dentro del rango permitido
if (edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA) {
    console.log("Tu edad es valida! Bienvenido");
} else { 
    console.log("Tu edad no es valida. Debes de tener entre 18 a 99 años.");
}

