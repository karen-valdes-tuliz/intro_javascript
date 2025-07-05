//Actividad 3 donde declaramos una variable y le asignamos un valor. Luego creamos una función que declara una variable. Para finalizar, ambos mensjaes se tienen que imprimir

//Declaramos una variable global
let saludoGlobal = "Hola desde el scope global";

//Creamos una función que declare una variable local
function mostrarMensaje() {
    let saludoLocal = "Hola desde el scope local";

//Imprimimos ambas variables
console.log(saludoGlobal);
console.log(saludoLocal);
}

//Llamamos a la función para que se ejecuten los console.log
mostrarMensaje();