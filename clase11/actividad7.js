//Actividad 7 donde le pedimos al usuario que ingrese dos números y una operación matemática. Utilizamos swith y operaciones matemáticas  
const prompt =require("prompt-sync")();

//Le pedimos al usuario que ingrese dos números
let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));

//Ahora le pedimos que ingrese la operación matemática que quiere realizar
let operacion = prompt("Ingrese la operación que quiere realizar. Esta puede ser: suma, resta, multiplicación o división: ");

//Usamos switch para determinar que operación hay que realizar
switch (operacion) {
    case "suma":
        console.log("Resultado: ", numero1 + numero2);
        break;
    case "resta":
        console.log("Resultado: ", numero1 - numero2);
        break
    case "multiplicacion":
    case "multiplicación":
        console.log("Resultado: ", numero1 * numero2);
        break
    case "division":
    case "división":
        console.log("Resultado: ", numero1 / numero2);
        break
    if (numero2 !== 0) {
        console.log("Resultado: ", numero1 / numero2); 
    } else {
        console.log("Error: no se puede dividir por cero");   
    }
    break;
    default:
        console.log("Error: operación no válida. Intentelo de nuevo");        
}