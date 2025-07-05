//Actividad 1 donde creamos un nuevo array con los cuadrados de los números
const numeros = [2, 4, 6, 8];

//Usamos el método map para crear un nuevo array llamado cuadrados
const cuadrados = numeros.map(num => {
return num * num;
});

//Imprimos el nuevo array
console.log(cuadrados);
