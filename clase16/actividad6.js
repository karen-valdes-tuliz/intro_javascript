//Actividad 6 agregar un prefijo y un sufijo a cada palabra en una lista
let palabras = ['hola', 'mundo', 'javascript'];

//Usamos map para transformar cada palabra con un prefijo y un sufijo
let palabrasTransformadas = palabras.map(palabra => {
    return `¡${palabra}!`;
});

//Mostramos la nueva lista en la consola
console.log(palabrasTransformadas);
