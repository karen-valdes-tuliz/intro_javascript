//Actividad 3 donde clasificamos una edad ingresada y usamos una función arrow
const prompt =require ("prompt-sync")();

//Le solicitamos al usuario una edad
let edad = parseFloat(prompt("Ingrese su edad: "))

//Creamos una función flecha para clasificar la edad
const clasificarEdad = (edad) => {
    if (edad >= 0 && edad <= 12) {
        return "Niño";
    } else if (edad >= 13 && edad <= 17) {
        return "Adolescente";
    } else if (edad >= 18 && edad <= 59) {
    return "Adulto";
    } else if (edad >= 60) {
        return "Adulto mayor";
    } else {
    return "La edad ingresada es inválida";
    }
};

//Se muestra el resultado en la consola 
console.log("Clasificación: Usted es un", clasificarEdad(edad));

