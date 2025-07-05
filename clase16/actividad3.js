//Actividad 3 donde hay que encontrar el primer número mayor a 10 en una lista
let numeros = [5, 8, 12, 20, 3];

//Usamos find para buscar el primer número mayor a 10
let primerMayorA10 = numeros.find(num => {
    return num > 10;
})

//Mostramos el resultado en la consola
console.log(primerMayorA10);

