//Actividad 8 donde utilizamos el ciclo for para determinar todos los múltiplos que puede tener el número ingresado por el usuario
const prompt =require ("prompt-sync")();

//Le pedimos al usuario que ingrese un número entero positivo
let numero =parseFloat(prompt("Ingrese un número positivo del 1 al 100: "));

//Verificamos que el número sea correcto
if (numero >= 1 && numero <= 100) {
    console.log(`Estos son los múltiplos de ${numero} entre 1 y 100: `);
    
    //Usamos el ciclo for para buscar los múltiplos
    for (let i = 1; i <= 100; i++) {
        if (i % numero === 0) {
            console.log(i);
        }
    }
} else {
    console.log("El número ingresado no es valido. Tiene que ser un número del 1 al 100");
}