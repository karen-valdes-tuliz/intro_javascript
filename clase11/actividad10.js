//Actividad 10 donde se crea un programa que da números al azar y el usuario tiene que adivinar el número. Usamos ciclo for para la actividad
const prompt =require ("prompt-sync")();

//Se genera el número aleatorio entre el 1 y el 10
let numeroSecreto = Math.floor(Math.random() *10) + 1;

//Usamos una variable para saber si el usuario adivinó el número
let adivinaste = false

//Usamos el ciclo for para dar 3 intentos de adivinanza al usuario
for (let intento =1; intento <= 3; intento++) {

//Le pedimos al usuario que ingrese un número
let respuesta = parseFloat(prompt(`Intento ${intento}: Adivina el número (puede ser entre el 1 al 10): `))

//Se compara la respuesta con el número secreto
if (respuesta === numeroSecreto) {
    console.log("🎉¡Felicitaciones!🎉 Adivinaste el número ");
    adivinaste = true;
    break
} else {
    console.log("Ese no es el número correcto ⛔ ¡Le quedan dos intentos!");
}    
}
//Si ya pasaron los 3 intentos y el usuario no adivino, le mostramos cual era el resultado
if (!adivinaste) {
    console.log(`No pudiste adivinar 😢. El número secreto era: ${numeroSecreto} `);    
}