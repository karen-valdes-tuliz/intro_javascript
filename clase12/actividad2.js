//Actividad2 donde el usuario tiene que ingresar una contraseña y mostrarle un mensaje si la contraseña es incorrecta. El usuario lo tiene que hacer hasta que la contraseña sea correcta y usamos Do While
const prompt =require ("prompt-sync")();

//Definimos la contraseña correcta
const contraseñaCorrecta = "1234";

//para guardar lo que el usuario ingresa vamos a usar la variable let
let constraseñaIngresada;

//Usamos el ciclo do while para pedirle la contraseña al usuario 
do {

//Le pedimos al usuario que ingrese la contraseña
constraseñaIngresada = prompt ("Ingrese la contraseña de 4 digitos: ");

//Si la contraseña ingresada esta mal, le informamos al usuario que esa contraseña no es correcta y que vuelva a intentar
if (constraseñaIngresada !== contraseñaCorrecta) {
    console.log("⛔ La contraseña es incorrecta ⛔Vuelva a intentar");
}

} while (constraseñaIngresada !== contraseñaCorrecta);

//Cuando la contraseña es correcta, le mostramos un mensaje indicandole que ya puede continuar
console.log("La contraseña es correcta!✅");
