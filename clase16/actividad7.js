//Actividad 7 donde filtramos nombres que empiecen con la letra 'A'
let nombres = ['Ana', 'Luis', 'Andrea', 'María'];

//Usamos filter para quedarnos con los nombres que comienzan con la letra A
let nombresConA = nombres.filter(nombre => {
    return nombre.slice(0, 1) === 'A';
});

//Mostramos el nuevo array con los nombres filtrados
console.log(nombresConA);
