//Actividad 10 donde trabajamos con una función expresada para calcular el factorial de un número

//Creamos la función expresada que recibe un número como parámetro
const calcularFactorial = function (numero) {
    let resultado = 1;

    //Con el ciclo for multiplicamos los números desde 1 hasta el valor recibido
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    //Devolvemos el resultado final
    return resultado
}

//Ingresare un número para prácticar y mostraremos el resultado en la consola 
let numero =8;
console.log(`El factorial de ${numero} es: `, calcularFactorial(numero));
