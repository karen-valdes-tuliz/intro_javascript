//Actividad 3 donde agregamos y eliminamos mascotas en una fila 
let mascotas = ["perro", "gato", "conejo"];

//Agregamos "Hámster" al inicio de la lista con unshift()
mascotas.unshift("Hámster");

//Eliminamos la primera mascota con shift()
let atendida = mascotas.shift()

//Mostramos la mascota atendida y actualizamos la lista
console.log("Mascota atendida: ", atendida);
console.log("Lista actualizada: ", mascotas);


