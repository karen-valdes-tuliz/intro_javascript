//Actividad 7 donde declaramos una variable que contenga una matriz 5x5 llenna de puros números enteros y positivos. Despues sumamos todos los números

//Creamos la matrix 5x5 con números enteros positivos
let matriz = [
    [5, 8, 9, 2, 10],
    [100, 125, 50, 10, 1],
    [15, 15, 1, 50, 100],
    [20, 20, 20, 30, 10],
    [10, 1, 2, 3, 4],
];

//Usamos una variable para acumular la suma
let suma = 0;

//Usamos dos ciclo for para recorrer la matriz
for (let i = 0; i < matriz.length; i++){
    for (let j = 0; j < matriz[i].length; j++ ) {
        suma += matriz[i] [j]; 
    }
}

//Se muestra el resultado final
console.log(`La suma total de los números en la matriz es: ${suma}`);

