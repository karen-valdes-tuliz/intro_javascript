//Actividad 1 donde le pedimos al usuario un precio y un procentaje de IVA, usamos una función arrow para calcular el precio final
const prompt =require ("prompt-sync")();

//Le solicitamos los datos al usuario
let precio = parseFloat(prompt("Ingrese el precio del producto 💄🎟️: "));
let iva = parseFloat(prompt("Ingrese el procentaje de IVA (%) : "));

//Creamos un arrow función para calcular el precio final con IVA
const calcularPrecioFinal = (precio, iva) => precio + (precio * iva / 100);

//Se muestra el resultado en la consola
let precioFinal = calcularPrecioFinal(precio, iva);
console.log(`El precio final con IVA es: ${precioFinal}`);

