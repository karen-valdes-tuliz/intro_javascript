//Actividad 4 donde el usuario solicita una cantidad de productos con su precio y luego, usamos la función arrow para calcular el descuento por la cantidad de productos
const prompt =require ("prompt-sync")();

//Le pedimos al usuario que ingrese la cantidad de productos y el precio por unidad
let cantidad =parseFloat(prompt("Ingrese la cantidad de productos: "));
let precioUnidad =parseFloat(prompt("Ingrese el precio por unidad: "));

//Usamos una función arrow para calcular el total con descuento
const calcularTotalConDescuento = (cantidad, precio) => {
    let totalSinDescuento = cantidad * precio;
    let descuento = 0;
    if (cantidad >= 10) {
        descuento = 0.20;
    } else if (cantidad >= 5) {
        descuento = 0.10;
    }

let totalFinal = totalSinDescuento - (totalSinDescuento * descuento);
return totalFinal
};

//Mostramos el resultado en la consola
let total = calcularTotalConDescuento(cantidad, precioUnidad);
console.log(`Total a pagar con descuento: $${total.toFixed(2)}`);
