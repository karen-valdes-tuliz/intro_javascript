//Actividad 9 donde contamos la cantidad total de letras en una lista de palabras
let palabras = ['sol', 'luna', 'estrella'];

//Usamos reduce para sumar la cantidad de letras de cada palabra
let totalLetras = palabras.reduce((acumulador, palabra) => {
    return acumulador + palabra.length
}, 0);

//Mostramos el resultado en la consola
console.log(totalLetras);
