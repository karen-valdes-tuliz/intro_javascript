//Actividad1 donde le solicitamos al usuario que ingrese números continuamente y terminar cuando sea uno negativo. Utilizamos While e imprimimos 
const prompt =require ("prompt-sync")();

//Indicamos con una variable la suma de los números ingresados
let suma = 0;

//Iniciamos el bucle con una variable
let numero = 0;

//Utilizamos el bucle while e indicamos que se frena el bucle con un número negativo
while (numero >= 0) {
    numero = parseFloat(prompt("Ingrese un número (negativo para salir): "))

//Sumamos si el número es mayor o igual a 0
if (numero >= 0) {
    suma += numero;
}
}

//Cuanod el usuario finaliza el bucle con un número negativo, le mostramos el resultado
console.log("Esta es la suma total de todos los números ingresados: ", suma);

