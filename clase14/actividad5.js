//Actividad 5 donde hacemos una verificación de si un auto es nacional oimportado. Usamos la función arrow
const prompt =require ("prompt-sync")();

//Le pedimos al usuario que ingrese la marca del vehículo 
let marca = prompt("Ingrese la marca del auto 🚗: ");

//Creamos una función arrow para verificar si el vehículo es nacional o importado
const verificarOrigen = (marca) => {
    let marcaMinuscula = marca.toLowerCase ();

    if (marcaMinuscula === "chevrolet" || marcaMinuscula === "ford" || marcaMinuscula === "fiat") {
        return "El auto es de origen nacional 🚗";
    } else {
        return "El auto es de origen importado";
    }
};

//Mostramos el resultado en la consola
console.log(verificarOrigen(marca));

