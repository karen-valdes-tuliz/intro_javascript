//Actividad 6 donde recorremos una matriz dada y sumar solo los números que esten encima o sean iguales a 10 pero menores que 1000
let matriz =[
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4],
];

//Usamos una varible para acumular la suma
let suma = 0;

//Recorremos la matriz (fila por fila) con el ciclo for doble
for (let i = 0; i < matriz.length; i++) {
//volvemos a recorrer cada número dentro de la fila
for (let j = 0; j < matriz[i].length; j++){
    let numero =matriz [i] [j];

    //Si el número es mayor o igual a 10 y menor que 1000
    if (numero >= 10 && numero < 1000) {
        suma += numero;
    }
}
}

//Mostramos el resultado en la consola
console.log(`La suma de los números entre 10 y 999 es: ${suma}`);


