// Actividad 7: Gestión de lista de flores
//Tenemos está lista predefinida de nombres de flores
let entrada = "Rosa, Tulipán, Orquídea, Lirio";

//Usamos un funcion para gestionarlos
function gestionarFloreria(floresStr) {
  //Convertimos el string en array y quitamos espacios
  let flores = floresStr.split(",").map(flor => flor.trim());

  //Verificamos si existe "Margarita" y si sí, agregamos "Azucena" al final
  if (flores.some(flor => flor.toLowerCase() === "margarita")) {
    flores.push("Azucena");
  }

  //Reemplazamos todas las "Orquídea" por "Clavel"
  flores = flores.map(flor => flor === "Orquídea" ? "Clavel" : flor);

  //Buscamos el índice de "Girasol"
  let indiceGirasol = flores.findIndex(flor => flor.toLowerCase() === "girasol");

  // Si no está, lo agregamos al inicio
  if (indiceGirasol === -1) {
    flores.unshift("Girasol");
  }

  //Ordenamos alfabéticamente
  flores.sort();

  //Construimos cadena separada por puntos usando reduce
  let cadenaFlores = flores.reduce((acum, flor, i) => {
    return i === 0 ? flor : acum + "." + flor;
  }, "");

  //Mostramos resultados
  console.log("Flores ordenadas y separadas por puntos:", cadenaFlores);

  //Devolvemos la cadena final
  return cadenaFlores;
}

//Ejecutamos la función
gestionarFloreria(entrada);
