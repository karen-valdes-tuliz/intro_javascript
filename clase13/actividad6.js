//Actividad 6 donde creamos una función declarada para convertir horas a minutos

//Creamos una función declarada con un parámetro llamado 'horas'
function convertirHorasAMinutos (horas) {
    
    //Creamos una variable para calcular el total en minutos
    let minutos = horas * 60

    //Devolvemos el resultado
    return minutos;

}

//Probamos la función con ejemplos y mostramos el resultado en la consola
console.log("10 horas son: ", convertirHorasAMinutos(10), "minutos");
console.log("48 horas son: ", convertirHorasAMinutos(48), "minutos");
console.log("1 hora es: ", convertirHorasAMinutos(1), "minutos");



