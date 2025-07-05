//Actividad 7 donde verificamos si en una lista se encuentra un elemento específico 
let comidas = ["pizza", "hamburguesa", "tacos"];

//Verificamos si "sushi" se encuentra en la lista y usamos includes()
let contieneSushi = comidas.includes("Sushi");

//Mostramos un mensaje en la consola, segun sea el resultado de la búsqueda
if (contieneSushi) {
    console.log("Sí, la lista contiene Sushi. 🍣");   
} else {
    console.log("No, la lista no contiene Sushi ❌🍣❌");
    
}