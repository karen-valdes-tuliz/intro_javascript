//Actividad 2 donde filtramos números pares de una lista y los guardamos en un nuevo array
let numeros = [1, 2, 3, 4, 5, 6];

//Usamos filter para crear un nuevo array con solo números pares
let numerosPares = numeros.filter(num => {
    return num % 2 === 0
});

//Mostramos el resultado en la consola 
console.log(numerosPares);

