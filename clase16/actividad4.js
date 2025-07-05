//Actividad 4 donde calculamos la suma total de los números de una lista
let numeros = [1, 2, 3, 4];

//Usamos reduce para sumar todos los números
let sumaTotal = numeros.reduce((acumulador, num) => {
    return acumulador + num
}, 0);

//Mostramos en la consola la suma total
console.log(sumaTotal);

