//Actividad 6 donde trabajamos con objetos. 

//Creamos un objeto llamado "deportista" con todos sus datos
let deportista = {
    nombre: "Juan",
    energia: 80,
    experiencia: 10,

//Usamos un método que recibe horas y actualiza la energía y experiencia del deportista
entrenarHoras: function(horas) {
    this.energia -= horas * 5;
    this.experiencia+= horas * 2;
    console.log(`${this.nombre} entrenó ${horas} horas`);    
}
};

//Llamamos la método para entrenar 5 horas
deportista.entrenarHoras(5);

//Mostramos en la consola cómo quedó el objeto luego del entrenamiento
console.log("Energía: ", deportista.energia);
console.log("Experiencia: ", deportista.experiencia);


