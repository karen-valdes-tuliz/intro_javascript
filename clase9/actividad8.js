//Le pedimos al usuario que ingrese longitudes de los tres lados de un triángulo.
const prompt = require ("prompt-sync")();

//Le pedimos al usuario que ingrese 3 longitudes para los lados del triángulo
let lado1 = parseFloat(prompt("Ingrese la longitud del primer lado: "));
let lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado: "));
let lado3 = parseFloat(prompt("Ingrese la longitud del tercer lado: "));

//Verificamos que tipo de triángulo es:
if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es equilátero");   
} else if (lado1 === lado2|| lado1 === lado3 || lado2 === lado3) {
    console.log("El triángulo es isosceles");   
} else {
    console.log("El triangulo es escaleno");
}