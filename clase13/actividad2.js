//Actividad 2 donde creamos una función expresada que recibe dos números y devuelve el mayor
const prompt =require("prompt-sync")();

const encontrarMayor = function(num1, num2) {
    //Se comparan ambos números
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Ambos números son iguales.";
    }
};
//La consigna no lo indico pero me parecio más comodo realizar el ejercicio simulando que le preguntaba al usuario
let num1 =parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));

//Se muestra el resultado en la consola 
console.log("El número mayor es: ", encontrarMayor(num1, num2));

