//Actividad 1 donde trabajamos con una función declarada y está recibe dos parámetros. La función debe devolver el área del triángulo

//creamos la función que recibe base y altura y devuelve el área del triángulo
function calcularAreaTriangulo (base, altura) {
    let area = (base * altura) / 2;
//devolvemos el resultado
    return area;
}
//Verificamos la función con valores reales
let area = calcularAreaTriangulo(10,10);

//Mostramos el resultado en la consola 
console.log("El área del triangulo es: ", area);


