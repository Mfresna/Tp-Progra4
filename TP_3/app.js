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

console.log('Costo Total del Carrito: $' + carrito.reduce(function(a,producto){
  return a + (producto.precio * producto.cantidad);
},0));



