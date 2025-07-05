//Actividad 9 donde trabajamos con una matriz para controlar gastos. 

let gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950],
]
//A) Indicamos el total de gastos de una semana. Usamos una función que recibe la matriz y el número de semana. Al final devolvemos la suma total de esa semana
function totalSemana(matriz, semana) {
    let suma = 0;
    let fila = semana -1;
    for (let dia = 0; dia < matriz[fila].length; dia++) {
        suma += matriz [fila][dia]
    }
    return suma;
}

//B) Indicamos el total de gastos en un día. Usamos una función que recibe la matriz y el número del dia. Al final devolvemos la suma total de ese día
function totalDia(matriz, dia) {
    let suma = 0;
    let columna = dia -1;
    for (let semana = 0; semana < matriz.length; semana++) {
    suma += matriz[semana] [columna]
}
return suma;
}

//C) Indicamos el total de gastos en el mes. Usamos una función que suma todos los valores de la matriz
function totalMes(matriz){
    let suma = 0;
    for (let semana = 0; semana < matriz.length; semana++){
        for (let dia = 0; dia < matriz [semana].length; dia++){
            suma += matriz [semana][dia];
        }
    }
    return suma;
}

//D) Semana con más gastos. Volvemos a usar otra función para indicar cuál fue la semana con más gastos
function semanaMayorGastos (matriz){
    let mayorSuma = 0;
    let semanaMayor = 0;
    for (let semana = 0; semana < matriz.length; semana++){
        let sumaSemana = 0;
        for (let dia = 0; dia < matriz[semana].length; dia++){
            sumaSemana += matriz[semana] [dia];
        }
        if (sumaSemana > mayorSuma){
        mayorSuma = sumaSemana;
        semanaMayor = semana + 1;
      }
    }
    return semanaMayor;
}

//D) Día con más gastos. Volvemos a usar otra función para indicar cuál fue el día con más gastos
function diaMayorGastos(matriz) {
    let mayorSuma = 0;
    let diaMayor = 0;
    let cantidadDias = matriz[0].length;
    for (let dia = 0; dia < cantidadDias; dia++){
        let sumaDia = 0;
        for (let semana = 0; semana < matriz.length; semana++){
            sumaDia += matriz [semana][dia];
        }
if (sumaDia > mayorSuma) {
    mayorSuma = sumaDia;
    diaMayor = dia + 1;
}
}
return diaMayor
}

//Ahora probamos las funciones y mostramos el resultado en la consola
console.log("Total gastos semana2: ", totalSemana(gastos, 2));
console.log("Total gastos día 3: ", totalDia (gastos, 3));
console.log("Total gastos mes: ", totalMes(gastos));
console.log("Semana con más gastos: ", semanaMayorGastos(gastos));
console.log("Día con más gastos: ", diaMayorGastos(gastos));





