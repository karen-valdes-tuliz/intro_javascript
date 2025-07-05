//Actividad 5 donde creamos una función expresada que concatena nombre y apellido. 

//Definimos la función expresada y la guardamos en la variable indicada
const concaternarNombres = function(nombre, apellido) {

    //Creamos una variable local para guardar el nombre completo
    let nombreCompleto = nombre + " " + apellido;
    
    //Devolvemos la cadena concatenada
    return nombreCompleto;

};

//Porbamos la función con dos ejemplos
console.log(concaternarNombres("Karen", "Valdes"));
console.log(concaternarNombres("Jung", "Hoseok"));



