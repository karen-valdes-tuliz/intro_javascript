//Actividad 7 donde se declaran dos variables y luego intercambiamos sus valores
const prompt =require ("prompt-sync")();

//Declaro dos variables
let a = 10;
let b = 20;

//Operaciones matemáticas
a = a + b;
b = a - b;
a = a - b;

//Se muestra el resultado en la consola
console.log("a: ", a);
console.log("b: ", b);


