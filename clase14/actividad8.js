//Actividad 8 donde creamos una función que imprime números del 1 al 100 con ciertas condiciones

//Creamos la función backEnd que recibe 2 números
function backEnd(num1, num2) {

//Usamos el ciclo for para recorrer los números
for (let i = 1; i <= 100; i++) {
    //si el número ingresado es múltiplo de ambos
    if (i % num1 === 0 && i % num2 === 0) {
        console.log("Back End");
    }
    //Si el número es múltiplo del primer número
    else if (i % num1 === 0) {
        console.log("Back");
    }
    //Si el número es múltiplo del segundo número
    else if (i % num2 === 0) {
        console.log("End");
    }
    //Si no cumple con ninguna condición
    else {
        console.log(i);
        
    }
}
}

//Llamamos a la función con dos números como ejemplo
backEnd(3, 5);