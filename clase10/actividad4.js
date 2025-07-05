//Declararemos 4 variables utilizando la palabra reservada let y se le asiganara valores según el tipo de dato que sugiera su nombre
const prompt = require ("prompt-sync")();

//Declaramos 4 variables 
let verdadero = true;
let texto = "Hola! 😁";
let numero = 7;
let nada = null;

//Operación matemática con número
let suma = numero + 770;
console.log(`Resutado de sumar 770 a la variable 'numero' ${suma}`);

//Concatenaci´n de texto
let textoCompleto = texto + "¿Como estas?";
console.log(`Mensaje completo: ${textoCompleto}`);

//Verificación de valor booleano
if (verdadero) {
    console.log("La variable 'verdadero' es TRUE 🙆🏻‍♀️");
} else {
    console.log("La variable 'verdadero' es FALSE 🙅🏻‍♀️");    
}

//Verificación de NULL
if (nada === null) {
    console.log("La variable 'nada' es NULL");
} else {
    console.log("La variable 'nada' tiene algún valor");    
}
