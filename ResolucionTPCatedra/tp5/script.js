// 1. Crear una promesa que se resuelva después de 2 segundos con el mensaje "Proceso completado". 
// Usar .then() y .catch() para mostrar el resultado en consola.

// const promesaBasica = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Proceso completado");
//   }, 2000);
// });

// promesaBasica
//   .then(resultado => console.log(resultado))
//   .catch(error => console.error(error)); //Si bien paso una funcion para reject, no la invoco en la función porque realmente no hay un escenario de "error"


// 2. Hacer una función que reciba un número por parámetro: si el número es par, 
// la promesa se resuelve mostrando el mensaje "El número es par"; Si el número es impar, 
// la promesa se rechaza con el mensaje “El número es impar”. Usar .then() y .catch(). 

// function verificarNumero(num) {
//   return new Promise((resolve, reject) => {
//     if (num % 2 === 0) {
//       resolve("El número es par");
//     } else {
//       reject("El número es impar");
//     }
//   });
// }

// verificarNumero(4)
//   .then(msg => console.log(msg))
//   .catch(err => console.error(err));

// verificarNumero(7)
//   .then(msg => console.log(msg))
//   .catch(err => console.error(err));

// 3. Crear una promesa que devuelva un número. Encadenar .then() para:
// Sumarle 5
// Multiplicar por 2
// Mostrar el resultado final

// new Promise((resolve) => {
//   resolve(10); // número inicial
// })
//   .then(num => num + 5)
//   .then(num => num * 2)
//   .then(resultado => console.log("Resultado final:", resultado));


// 4. Hacer una función que simule “cargar datos” con setTimeout (por ejemplo, 
// tarda 3 segundos en resolverse). Mostrar "Cargando..." antes de la promesa y 
// "Datos cargados" al resolverla.

// function cargarDatos() {
//   return new Promise(resolve => {
//     console.log("Cargando...");
//     setTimeout(() => {
//       resolve("Datos cargados");
//     }, 3000);
//   });
// }

// cargarDatos().then(resultado => console.log(resultado));


// 5. Reutilizar el ejercicio 1, pero en lugar de .then(), crear una función async y 
// usar await para esperar la promesa. Mostrar el mensaje en consola

// function promesaTiempo() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("Proceso completado con async/await"), 2000);
//   });
// }

// async function ejecutar() {
//   const resultado = await promesaTiempo();
//   console.log(resultado);
// }

// ejecutar();


// 6. Reutilizar el ejercicio 2 (número par/impar), pero ahora implementarlo usando async/await, 
// y capturar el error con try/catch.
// Recordá que cuando trabajamos con .then() se usa .catch() para manejar errores.
// En cambio, cuando usamos async/await, los errores de una promesa rechazada se capturan con try/catch, igual que las excepciones en código sincrónico.
// Dicho esto, Implementar la función de verificación usando async/await y capturar el error con try/catch.

// function verificarNumero(num) {
//   return new Promise((resolve, reject) => {
//     if (num % 2 === 0) {
//       resolve("El número es par");
//     } else {
//       reject("El número es impar");
//     }
//   });
// }

// async function probarNumero(num) {
//   try {
//     const resultado = await verificarNumero(num);
//     console.log(resultado);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// probarNumero(8);
// probarNumero(5);


// 7. Crear 3 funciones que devuelvan promesas con un setTimeout distinto (por ejemplo: 1s, 2s y 3s). 
// Llamarlas en una función async usando await para ejecutarlas en orden y mostrar los resultados.

// function tarea1() {
//   return new Promise(resolve => setTimeout(() => resolve("Tarea 1 completada"), 1000));
// }
// function tarea2() {
//   return new Promise(resolve => setTimeout(() => resolve("Tarea 2 completada"), 2000));
// }
// function tarea3() {
//   return new Promise(resolve => setTimeout(() => resolve("Tarea 3 completada"), 3000));
// }

// async function ejecutarSerie() {
//   const r1 = await tarea1();
//   console.log(r1);

//   const r2 = await tarea2();
//   console.log(r2);

//   const r3 = await tarea3();
//   console.log(r3);
// }

// ejecutarSerie();


// 8. Tomar las 3 funciones del ejercicio anterior, pero ahora ejecutarlas con 
// Promise.all (investigar). Mostrar todos los resultados juntos cuando se resuelvan.

// async function ejecutarParalelo() {
//   const [r1, r2, r3] = await Promise.all([tarea1(), tarea2(), tarea3()]);
//   console.log("Resultados en paralelo:", r1, r2, r3);
// }

// ejecutarParalelo();




