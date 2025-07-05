//Actividad 8 donde creamos una función expresada que convierte celsius a fahrenheit
//Creamos una función expresada con una variable
const convertirCelsiusAFahrenheit = function(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;

    //Devolvemos el resultado
    return fahrenheit;
}

//Probamos la función y mostramos el resultado en la consola
let resultado = convertirCelsiusAFahrenheit(30)
console.log("30 grados Celsius son: " + resultado + " grados Fahrenheit.");

