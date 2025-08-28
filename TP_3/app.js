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