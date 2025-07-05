//Actividad 7 donde declaramos una variable global con una hora y mostramos un saludo

//Declaramos una variable con un valor fijo de hora
let horaActual = 20;

//Creamos una función declarada que va a usar esa variable
function mostrarSaludo() {

    //Usamos condicionales para decidir que mensaje mostrar
    if (horaActual < 12) {
        console.log("Buenos días! 😁☀️");        
    } else if (horaActual < 18) {
        console.log("Buenas tardes! 😊🌥️");
    } else {
        console.log("Buenas noches! 😴🌙");
    }
}

//Mostramos el resultado en la consola
mostrarSaludo();
