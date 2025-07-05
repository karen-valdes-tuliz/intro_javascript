//Actividad 3 donde se cuentan los números impares desde un determinado número a otro. Usamos ciclo for para la actividad
const prompt =require ("prompt-sync")();

//Le pedimos al usuario que ingrese un número y inicializamos el contador de impares
let x = parseFloat (prompt("Ingrese un número: "))
let contadorImpares = 0;

//Con el ciclo for iniciamos el contador para determinar los números impares que hay hasta el número ingresado por el usuario 
for (let i = 0; i <= x; i++) {
//Verificamos si el número es impar
if (i % 2 !== 0) {
//Si el número ingresado es impar, se le suma
contadorImpares++;    
}
}
//Le mostramos el resultado al usuario
console.log(`La cantidad de números impares desde 0 hasta ${x} (inclusive) es: ${contadorImpares}`);
