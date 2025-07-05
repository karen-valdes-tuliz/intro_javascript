// Actividad 6: Gestión de marcas de autos
//Tenemos está lista predefinida de marcas de autos
let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";

//Usamos una función para gestionarlos
function gestionarAutos(marcasStr) {
  // Convertimos el string en un array y quitamos espacios
  let marcas = marcasStr.split(",").map(marca => marca.trim());

  //Verificamos si existe la marca "Tesla"
  let existeTesla = marcas.some(marca => marca.toLowerCase() === "tesla");

  //Reemplazamos "Ford" por "BMW"
  let marcasReemplazadas = marcas.map(marca => marca === "Ford" ? "BMW" : marca);

  //Buscamos el índice de "Chevrolet"
  let indiceChevrolet = marcasReemplazadas.findIndex(marca => marca.toLowerCase() === "chevrolet");

  //Ordenamos las marcas alfabéticamente
  let marcasOrdenadas = marcasReemplazadas.sort();

  //Creamos una cadena separada por puntos usando reduce
  let cadenaMarcas = marcasOrdenadas.reduce((acum, marca, i) => {
    return i === 0 ? marca : acum + "." + marca;
  }, "");

  //Mostramos resultados
  console.log("¿Existe Tesla?:", existeTesla);
  console.log("Índice de Chevrolet:", indiceChevrolet);
  console.log("Marcas ordenadas y separadas por puntos:", cadenaMarcas);

  return cadenaMarcas;
}

//Ejecutamos la función
gestionarAutos(entrada);
