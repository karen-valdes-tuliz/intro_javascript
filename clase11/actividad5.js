// Actividad 5 donde se utiliza el ciclo for para determinar que números son par. 
const prompt = require ("prompt-sync")();

//Se le pide al usuario que ingrese dos números enteros
let inicio = parseFloat(prompt("Ingrese el primer número: "));
let fin = parseFloat(prompt("Ingrese el segundo número: "));

//Verificamos que el primer número no sea menor que el segundo
if (inicio > fin) {
    console.log("Los valores son invalidos. El primer número tiene que ser menor que el segundo, vuelva a intentar."); 
}

//Iniciamos el ciclo for
else {
    console.log(`Estos son los números pares entre ${inicio} y ${fin}`);
    for (let i = inicio; i < fin; i++) {
        if (i % 2 === 0) {
            console.log(i);
            
        }
        
    }
    
}
