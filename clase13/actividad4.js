//Actividad 4 donde creamos una función para verificar si un número es par o impar

//Declaramos una función que recibe un número como parámetro
function esPar (numero) {
    let resultado;

    //Verificamos si el número se puede dividir por 2
    if (numero %2 === 0) {
        resultado = "Es par";
    } else {
        resultado = "Es impar";
    }
    //Devolvemos el resultado
    return resultado;
}

//Probamos la función don distintos valores
console.log(esPar(8));
console.log(esPar(7));
console.log(esPar(1));
console.log(esPar(2));



