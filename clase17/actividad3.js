// Actividad 3 donde gestionamos un array de productos
const prompt = require("prompt-sync")();

// Creamos un array para que sea de objetos con nombre y precios
let productos = [
  { nombre: "Mangas", precio: 50 },
  { nombre: "Manhwas", precio: 60 },
  { nombre: "Novelas Coreanas", precio: 25 },
  { nombre: "Libros", precio: 30 }
];

// Hacemosuna función para gestionar el array de productos
function gestionarProductos(array) {
  console.log("📚Lista inicial de productos: ");
  array.forEach((producto, index) => {
    console.log(`${index}: ${producto.nombre} - $${producto.precio}`);
  });

  // Pedimos al usuario un nuevo producto (nombre y precio)
  let nuevoNombre = prompt("Ingresa un nuevo producto para agregar: ");
  let nuevoPrecio = parseFloat(prompt("Ingresa el precio del nuevo producto: "));
  array.push({ nombre: nuevoNombre, precio: nuevoPrecio });
  console.log(`Se agregó "${nuevoNombre}" con precio $${nuevoPrecio} a la lista`);

  // Eliminamos el último producto del array
  let productoEliminado = array.pop();
  console.log(`Se eliminó el último producto: "${productoEliminado.nombre}"`);

  // Pedimos al usuario un producto para buscar su índice
  let productoBuscado = prompt("Ingresa un producto para buscar su posición: ");
  let indice = array.findIndex(
    p => p.nombre.toLowerCase() === productoBuscado.toLowerCase()
  );

  // Mostramos el resultado de la búsqueda
  console.log("\nGestión de productos:");
  console.log("Lista actual de productos 📋:");
  array.forEach((producto, index) => {
    console.log(`${index}: ${producto.nombre} - $${producto.precio}`);
  });

  if (indice !== -1) {
    console.log(`El producto "${productoBuscado}" está en la posición: ${indice}`);
  } else {
    console.log(`El producto "${productoBuscado}" no se encuentra en la lista`);
  }

  // Verificamos si existe un producto con precio mayor a 50 usando some()
  let existeCaro = array.some(p => p.precio > 50);
  console.log(
    existeCaro
      ? "Hay al menos un producto con precio mayor a 50"
      : "No hay productos con precio mayor a 50"
  );

  // Devolvemos una cadena con los nombres de los productos separados por comas usando reduce
  let cadenaNombres = array.reduce((acumulador, producto, i) => {
    return i == 0 ? producto.nombre : acumulador + ", " + producto.nombre;
  }, "");
  console.log("Nombres de productos:", cadenaNombres);
}

// Ejecutamos la función
gestionarProductos(productos);

