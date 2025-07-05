//Actividad 2 donde se calcula el promedio de 5 calificaciones ingresadas por el usuario. Usamos una función flecha
const prompt =require ("prompt-sync")();

//Le pedimos al usuario queingrese 5 clasificaciones y las convertimos a número
let nota1 = parseFloat(prompt("Ingrese la primera clasificación: "));
let nota2 = parseFloat(prompt("Ingrese la segunda clasificación: "));
let nota3 = parseFloat(prompt("Ingrese la tercera clasificación: "));
let nota4 = parseFloat(prompt("Ingrese la cuarta clasificación: "));
let nota5 = parseFloat(prompt("Ingrese la quinta clasificación: "));

//Calculamos el promediocon una función arrow
const calcularPromedio = (n1, n2, n3, n4, n5) => (n1 + n2 + n3 + n4 + n5) / 5;

//Mostramos el resultado en la consola 
let promedio = calcularPromedio(nota1, nota2, nota3, nota4, nota5);
console.log(`El promedio de las clasificaciones es: ${promedio} `);

