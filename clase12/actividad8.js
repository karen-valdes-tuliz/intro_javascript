//Actividad 8 donde vamos a generar 2 funciones

//Creamos una matriz 10 x 10 con números del 1 al 100
let matriz = [];
let numero = 1;

//Rellenamos la matriz con números del 1 al 100 con el doble ciclo for
for (let i = 0; i < 10; i++){
    matriz [i] = [];
    for (let j = 0; j < 10; j++){
        matriz [i][j] = numero
        numero++;
    }
}
//Agregamos una funcion para sumar los valores de la diagonal roja
function sumaDiagonalRoja(matriz) {
let suma = 0;
let valoresRojo = [];

for (let i = 0; i < matriz.length; i++){
    valoresRojo.push(matriz[i][i]);
    suma += matriz [i][i];
}

console.log("Valores en diagonal roja🔴: ", valoresRojo);
return suma;
}

//Agregamos otra función para sumar los valores de la diagonal verde
function sumaDiagonalVerde(matriz) {
    let suma = 0;
    let valoresVerde = [];
    let v = matriz.length;

    for(let i = 0; i < v; i++){
        valoresVerde.push(matriz[i][v - 1 - i]);
        suma += matriz [i][v - 1 - i];
    }
    console.log("Valores en diagonal verde🟢: ", valoresVerde);
    return suma;
}

//Ejecutamos las funciones y mostramos los resultados
let sumaRoja = sumaDiagonalRoja(matriz);
let sumaVerde = sumaDiagonalVerde(matriz);

console.log("🔴Suma diagonal roja🔴: ", sumaRoja);
console.log("🟢Suma diagonal verde🟢: ", sumaVerde);

