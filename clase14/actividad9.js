//Actividad 9 donde buscamos la útima aparición de un modelo de auto. 

//Primero creamos un array con varios modelos de autos
let modesAutos = [
    "Ford", "Chevrolet", "Toyota", "Fiat", "Renault", 
    "Peugeot", "Fiat", "Ford", "Volkswagen", "Nissan"
];

//Creamos una función para recibir el modelo del auto y buscar su última aparición en la lista
function ultimaAparicionModeloAuto(modelo) {
    let ultimaPosicion = -1;

    //Recorremos el array
    for (let i = 0; i < modesAutos.length; i++) {
        //Si se encuentra, se actualiza la posición
        if (modesAutos[i].toLowerCase() === modelo.toLowerCase()) {
            ultimaPosicion = i;
            
        }
    }
//Verificamos si encontramos el modelo
if (ultimaPosicion !== -1) {
    console.log(`El modelo "${modelo}" aparece por última vez en la posición ${ultimaPosicion + 1}`);
} else {
    console.log(`El modelo "${modelo} no está en la lista`);
}
}

//Ahora verificamos la función
ultimaAparicionModeloAuto("Fiat")
ultimaAparicionModeloAuto("Nissan")
ultimaAparicionModeloAuto("Honda")
