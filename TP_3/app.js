const productos = [
  { id: 1, nombre: "Laptop", precio: 1200, stock: 10 },
  { id: 2, nombre: "Mouse", precio: 25, stock: 50 },
  { id: 3, nombre: "Teclado", precio: 45, stock: 30 },
  { id: 4, nombre: "Monitor", precio: 300, stock: 15 },
  { id: 5, nombre: "Auriculares", precio: 80, stock: 20 }
];

/// EJERCICIO 1
console.log('EJERCICIO 1');

console.log(productos);

productos.push({ id: 6, nombre: "Impresora", precio: 1600, stock: 4 });

console.log("Lista Nueva");
console.log(productos);

productos.pop();

console.log("Lista Eliminando ultimo elemento");
console.log(productos);

/// EJERCICIO 2
console.log('\n EJERCICIO 2');

    //funcion lambda
let productosEnStock = productos.filter(p => p.stock > 10);
    //funcion anonima
let productosEnStock1 = productos.filter(function(p){ return p.stock > 10});

console.log(productosEnStock1);

/// EJERCICIO 3
console.log('\n EJERCICIO 3');

console.log(productos.find(p => p.nombre === "Laptop"));


/// EJERCICIO 4
console.log('\n EJERCICIO 4');
let total = productos.reduce(function(a,producto){
    return a + producto.precio
},0);

console.log('Total de costo: ' + total);
console.log('Promedio del costo: ' + total/productos.length);


/// EJERCICIO 5
console.log('\n EJERCICIO 5');

console.log('Hay productos con stock 0: ' + productos.some(p => p.stock === 0));
console.log('Todos los productos valen mas que $100: ' + productos.every(p => p.precio > 100));


/// EJERCICIO 6
console.log('\n EJERCICIO 6');

let clientes = [
  {id: 1,nombre: "Ana Pérez",edad: 28,compras: ["Laptop", "Mouse", "Teclado"]},
  {id: 2,nombre: "Carlos Gómez",edad: 35,compras: ["Smartphone", "Auriculares"]},
  {id: 3,nombre: "Lucía Fernández",edad: 22,compras: ["Tablet", "Funda", "Cargador"]}
];

clientes.forEach(function(cliente){
    console.log('Cliente: ' + cliente.nombre + ' - Cantidad de Compras: ' + cliente.compras.length);
})

/// EJERCICIO 7
console.log('\n EJERCICIO 7');

function procesarClientes(clientes,callback){
  callback(clientes)
}
  //Nombre de los Clientes
procesarClientes(clientes,cliente => {
  console.log('Nombre de los Clientes: '+ cliente.map(c => c.nombre));
});
  //Cantidad de Compras
procesarClientes(clientes,cliente => {
  console.log('Total de Compras: ' + cliente.reduce(function(a,c) {return a+c.compras.length},0))
});

/// EJERCICIO 8
console.log('\n EJERCICIO 8');

const numeros = [1,5,3,2,6,1,4,9,8,7,7]

  //Ascendente
console.log(numeros.sort((a,b)=> a-b));

  //Descendente
console.log(numeros.sort((a,b)=> b-a));

/// EJERCICIO 9
console.log('\n EJERCICIO 9');

let tienda = {
  productos: [
    { id: 1, nombre: "Laptop", precio: 1200, stock: 10 },
    { id: 2, nombre: "Mouse", precio: 25, stock: 50 },
    { id: 3, nombre: "Teclado", precio: 45, stock: 30 },
    { id: 4, nombre: "Monitor", precio: 300, stock: 15 },
    { id: 5, nombre: "Auriculares", precio: 80, stock: 20 }
  ],
  vender: function(idProducto,cantidad){
    let pBuscado = this.productos.find(p => p.nombre === idProducto);

    if(!pBuscado){
      console.log('Producto no Encontrado');
    }else if(pBuscado.stock >= cantidad){
      pBuscado.stock -= cantidad;
      console.log('Producto vendido Exitosamente');
    }else{
      console.log('Stock Insuficiente');
    }
  }
};

tienda.vender("Producto1", 5);
tienda.vender("Laptop", 5);
tienda.vender("Laptop", 10);

/// EJERCICIO 10
console.log('\n EJERCICIO 10');

let carrito = [];

carrito.push({id:1,nombre:"yerba",precio: 500, cantidad: 5});
carrito.push({id:1,nombre:"azucar",precio: 100, cantidad: 10});
carrito.push({id:1,nombre:"bombilla",precio: 600, cantidad: 1});
carrito.push({id:1,nombre:"Don Satur",precio: 1200, cantidad: 50});
carrito.push({id:1,nombre:"Agua Caliente",precio: 800, cantidad: 2});

console.log(carrito.map(function(p){
  return {nombre: p.nombre, cantidad: p.cantidad, subtotal: p.cantidad*p.precio}
}));

console.log('Costo Total del Carrito: $' + carrito.reduce(function(a,producto){
  return a + (producto.precio * producto.cantidad);
},0));

/// EJERCICIO 11
console.log('\n EJERCICIO 11');

const libros = [
  {id: 1,titulo: "Automatización en entornos reales",autor: "Matías García",genero: "Tecnología",disponible: true},
  {id: 2,titulo: "CSS Grid y Flexbox en acción",autor: "Laura Méndez",genero: "Desarrollo Web",disponible: false},
  {id: 3,titulo: "Consultas SQL para arquitectos de datos",autor: "Carlos Ruiz",genero: "Bases de Datos",disponible: true},
  {id: 4,titulo: "Scraping ético y legal",autor: "Ana Torres",genero: "Informática Legal",disponible: true},
  {id: 5,titulo: "Accesibilidad y semántica HTML",autor: "Federico López",genero: "Desarrollo Web",disponible: false}
];

console.log(libros.filter(l => l.genero === "Desarrollo Web"));

console.log('Libros en Mayuscula:');
console.log(libros.map(l => l.titulo.toUpperCase()));

function prestarLibro(id){
  let libro = libros.find(l => l.id === id);

  if(libro.disponible){
    console.log('\nLibro Alquilado con Exito!');
    libro.disponible = false;
    console.log('El libro ahora queda: ', libro);
  }else{
    console.log('El Libro no se encuentra disponible');
  }
}

prestarLibro(1);


/// EJERCICIO 12
console.log('\n EJERCICIO 12');

let agenda = {
  contactos: [],
  agregarContacto(contacto) {
    this.contactos.push(contacto);
  },
  eliminarContacto(id){
    console.log('Contactos Borrados: ', this.contactos.filter(c => c.id === id));
    this.contactos = this.contactos.filter(c => c.id !== id);
  },
  buscarContacto(nombre){
    console.log('Contactos con el nombre: ' + nombre + '\n', this.contactos.find(c => c.nombre.toUpperCase() === nombre.toUpperCase()));
  },
  listarContactos(){
    console.log('Todos los contactos: ', this.contactos);
  }
}


agenda.agregarContacto({ id: 1, nombre: 'Matías García', telefono: '223-555-1234' });
agenda.agregarContacto({ id: 2, nombre: 'Laura Méndez', telefono: '223-555-5678' });
agenda.agregarContacto({ id: 3, nombre: 'Carlos Ruiz', telefono: '223-555-9999' });
agenda.agregarContacto({ id: 1, nombre: 'Matías García', telefono: '223-555-0000' }); // repetido

agenda.listarContactos();
agenda.buscarContacto('laura méndez');
agenda.eliminarContacto(1);
agenda.listarContactos();


/// EJERCICIO 13
console.log('\n EJERCICIO 13');

  //Se utiliza el arreglo productos del principio
function comprar(id, cantidad, callbackExito, callbackError){
  let producto = productos.find(p => p.id === id);
  if(!producto){
    //No se encontro
    callbackError('Producto No Encontrado');
  }else if(producto.stock < cantidad){
    //No hay Stock
    callbackError('No hay Stock del Producto');
  }else{
    producto.stock -= cantidad;
    callbackExito('Compra Exitosa!');
  }
}

comprar(1,1,m => console.log('GENIAL! ' + m),m => console.log('ERROR! ' + m));
console.log('\nSTOCK ACTUAL: ', productos);

