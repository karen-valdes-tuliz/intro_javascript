//Actividad 9 donde creamos una función que imprime los números hasta el número recibido
const prompt =require ("prompt-sync")();

//La actividad no lo indica pero voy a simular de que el usuario tiene que ingresar un número
let numeroUsuario = parseFloat(prompt("Ingrese un número: "))

//Declaramos la función para que cuente hasta el número ingresado por el usuario
function contarHasta (numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(i);        
    }
}

//Llamamos a la función y mostramos el resultado en la consola
contarHasta(numeroUsuario);
