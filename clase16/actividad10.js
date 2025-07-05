//Actividad 10 donde contruimos una frase a partir de una lista de palabras
let palabras = ['Me', 'gusta', 'aprender', 'javaScript' ];

//Usamos reduce para concatenar todas las palabras que tienen espacio
let frase = palabras.reduce((acumulador, palabra) => {
    return acumulador + ' ' + palabra;
});

//Mostramos la frase completa en la consola
console.log(frase);
