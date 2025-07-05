//Actividad 10 donde trabajamos con un array vacío que almacena datos
const prompt =require ("prompt-sync")();

//Creamos un array vacío para alamacenar las flores favoritas
let floresFavoritas = [];

//Le pedimos al usuario que ingrese 3 flores favoritas
let flor1 = prompt("Ingrese su primer flor favorita🌼: ");
let flor2 = prompt("Ingrese su segunda flor favorita 🌸: ");
let flor3 = prompt("Ingrese su tercer flor favorita 🌻: ");

//Agregamos manualmente las flores al array sin usar push
floresFavoritas[0] = flor1;
floresFavoritas[1] = flor2;
floresFavoritas[2] = flor3;

//Le preguntasmos al usuario por una flor específica 
let florBuscada = prompt("Ingrese una flor para verificar si está entre sus favoritas: ");

//Verificamos manualmente si la flor está en el array y contamos cuantas veces aparece 
let contador = 0;
if (floresFavoritas[0].toLowerCase() === florBuscada.toLowerCase()) {
    contador++;
}
if (floresFavoritas[1].toLowerCase() === florBuscada.toLowerCase()) {
    contador++;
}
if (floresFavoritas[2].toLowerCase() === florBuscada.toLowerCase()) {
    contador++;
}

//Mostramos el resultado en la consola
if (contador > 0) {
    console.log(`La flor "${florBuscada}" fue mencionada ${contador} vez/veces como favorita 🌸 `);
} else {
    console.log(`La flor "${florBuscada}" no está entre tus favoritas`);
    
}