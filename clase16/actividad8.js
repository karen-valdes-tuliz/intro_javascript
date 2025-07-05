//Actividad 8 donde buscamos un nombre específico en la lista
let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];

//Usamos find para buscar el nombre 'Laura'
let nombreBuscado = nombres.find(nombre => nombre === 'Laura');

//Mostramos el resultado en la consola
if (nombreBuscado) {
    console.log(`Si! Encontramos el nombre que buscabas: ${nombreBuscado}`);
} else {
    console.log(`El nombre está en la lista`);
    
}