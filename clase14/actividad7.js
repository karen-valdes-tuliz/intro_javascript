//Actividad 7 donde vamos a definir dos objetos, a estos les vamos a dar propiedades y valores. También vamos a crear una función que nos muestre la información de estos objetos

//Definimos dos objetos con sus propiedades
let libro1 = {
    titulo: "Trash of the count's family",
    autor: "Yoo Ryeo Han",
    anioPublicacion: 2018
};

let libro2 = {
    titulo: "Omniscient Reader's Viewpoint",
    autor: "Shing Shong",
    anioPublicacion: 2018
};

//Ahora usamos una función para mostrar la información de estos objetos
function mostrarLibro (libros) {
    for (let libro of libros) {
        console.log(`Titulo: ${libro.titulo}`);
        console.log(`Autor: ${libro.autor}`);
        console.log(`Año de publicación: ${libro.anioPublicacion}`);
        console.log();        
        console.log(`✨✨✨✨✨✨✨✨✨✨✨`);
    }
}
//Libros disponibles
let libros = [libro1, libro2];

//Mostramos el resultado en la consola
mostrarLibro(libros);
