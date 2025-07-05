//Actividad 1 donde manipulamos un objeto literal y arrays
let estudiante = {
    nombre: 'Maria',
    edad: 20,
    notas: [5, 6, 7, 8, 9]
};

//Creamos la función procesarEstudiante. Agregamos una nota al array de notas y eliminamos la primera nota
function procesarEstudiante(estudiante) {
estudiante.notas.push(10);
estudiante.notas.shift();

//Calculamos el promedio de las notas restantes
let sumaNotas = estudiante.notas.reduce((acum, notas) => acum + notas, 0);
let promedio = sumaNotas / estudiante.notas.length

//Convertimos el nombre a mayúsculas
let nombreMayusculas = estudiante.nombre.toUpperCase();
return {
    nombre: nombreMayusculas,
    promedio: promedio
};
}

//Llamamos a la función y mostramos el resultado en la consola
let resultado = procesarEstudiante(estudiante);
console.log((resultado));

