//Actividad 2 donde se ingresa un color del semáforo y este color va a tener una indicación al usuario
const prompt = require ("prompt-sync")();

//Le pedimos la usuario que ingrese un color del semáforo: verde, rojo o amarillo
let color = (prompt("Ingrese un color del semáforo: ")).toLowerCase();

//Utilizamos el switch para dar una respuesta dependiendo del color
switch (color) {
    case "rojo": 
        console.log("Alto, no puedes avanzar 🔴🔴🔴");
        break;
    case "amarillo":
        console.log("Precaución, prepárate para avanzar 🟡🟡🟡");
        break;
    case "verde":
        console.log("Avanza con seguridad. 🟢🟢🟢");
        break;
    default:
        console.log("Color invalido, ingrese un color correspondiente al semáforo. Rojo, amarillo o verde");
        break;
}