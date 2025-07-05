//Actividad 5 donde manipulamos arrays y cadenas
//Array inicial de frases
let frases = [
    "El clima es MALO hoy",
    "Este libro es muy MALO",
    "El servicio aquí es MALO"
];

//Usamos una función que procesa las frases
function procesarFrases(array) {
    let frasesModificadas = array.map(frase => {

        //Convertimos la frase a minúsculas
        let fraseMinuscula = frase.toLowerCase();

        //Dividimos la frase en palabras
        let palabras = fraseMinuscula.split(" ");

        //Reemplazamos las palabras "malo" por "bueno"
        let palabrasReemplazadas = palabras.map(palabra => palabra === "malo" ? "bueno" : palabra);

        //Cambiamos las palabras en una nueva cadena separada por espacios
        let fraseNueva = palabrasReemplazadas.reduce((acum, palabra, i) => {
            return i === 0 ? palabra : acum + " " + palabra;
        });

        //Devolvemos la frase modificada
        return fraseNueva;
    });

    //Devolvemos el array con las frases modificadas
    return frasesModificadas;
}

// Ejecutamos la función y mostramos el resultado
let resultado = procesarFrases(frases);
console.log("Frases modificadas:");
resultado.forEach((frase, i) => {
  console.log(`${i + 1}: ${frase}`);
});
