// // function tiempo(){
// //     return new Promise((resolve, reject) => {
// //         setTimeout(()=>{
// //             resolve("Tiempo Transcurrido");
// //         },3000)
// //     })
// // }

// // tiempo().then(m => console.log(m));

// //---------------------------------------------

// // function compra(precio,saldo){
// //     return new Promise((resolve, reject) => {
// //         if(saldo >= precio){
// //             resolve("Exito");
// //         }else{
// //             reject("No se puede Comprar!");
// //         }
// //     });
// // }

// // compra(10,50)
// //     .then(m => console.log(m))
// //     .catch(m => console.log(m));

// //--------------------

// // function devolverUsuario(){
// //     return new Promise((resolve) => {
// //         resolve({nombre: 'matias', edad: 29});
// //     })
// // }

// // devolverUsuario().then(usr => console.log(usr));

// //----------------
// function paso(ms,msj){
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve(msj);
//         },ms);
//     })
// }

// paso(2000,'Hola').then(m => console.log(m));

/*
// Nivel 1 – básicos
// Crear una promesa que se resuelva con el mensaje "Hola mundo" y mostrarlo en consola.
let promesa = new Promise((resolve) => {
    resolve('Hola Mundo');
})

promesa.then(m => console.log(m));

// Hacer una función que reciba un nombre y devuelva una promesa que, 
// después de 1 segundo, se resuelva con "Hola, <nombre>".
function saludar(nombre){
    return new Promise((resolve) => {
        resolve('Hola ' + nombre);
    })
}

saludar('Matias').then(n => setTimeout(()=>{console.log(n)},1000));

// Crear una promesa que siempre se rechace con el mensaje "Error intencional". Manejarlo con .catch().
let promesa1 = new Promise((reject) => {
    reject('Error Intencional.');
})

promesa1.catch(m => console.log(m));

// Simular una operación matemática: devolver una promesa que sume dos números.
// Resolverla y mostrar el resultado.
function operacion(num1,num2){
    return new Promise((resolve) => {
        resolve(num1 + num2);
    })
}

operacion(5,2).then(resultado => console.log('El resultado es: ', resultado));

// Nivel 2 – intermedios
// Crear una promesa que se resuelva con un número aleatorio del 1 al 10.
let promesa2 = new Promise((resolve) => {

    resolve(Math.floor(Math.random() * 10));
})

promesa2.then(m => console.log(m));
*/

// Reutilizar la promesa anterior y encadenar .then() para mostrar:
// function operar(){
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve(Math.floor(Math.random() * 10));
//         },2000);        
//     });
// }

// operar()
//     .then(n => {
//         console.log('El valor original es: ', n);
//         return n+2;
//     })
//     .then(n=>{
//         console.log('El valor +2 es: ', n);
//         return n*n;
//     })


// Hacer una función que devuelva una promesa que se resuelva después de N segundos 
// (donde N es un número recibido por parámetro).

// Crear una función login(usuario, contraseña) que devuelva una promesa:
// Si usuario = "admin" y contraseña = "1234", se resuelve con "Bienvenido admin".
// Si no, se rechaza con "Credenciales inválidas".

// function login(usr,pass){
//     return new Promise((resolve, reject) => {
//         if(usr === 'admin' && pass === '1234'){
//             resolve('Bienvenido Admin');
//         }else{
//             reject('Credenciales Invalidas');
//         }
//     });
// }

// login('admin','12345')
//     .then(m => console.log(m))
//     .catch(m => console.log(m))

//---------------------------
function operacion(a,b,operacion){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            switch(operacion){
                case 'suma':
                    resolve(a+b);
                    break;
                case 'resta':
                    resolve(a-b);
                    break;
                case 'multiplicacion':
                    resolve(a*b);
                    break;
                case 'division':
                    if(b === 0){
                        reject('Error');
                    }else{
                        resolve(a/b);
                    }
                    break;
            }},1000);
        })
}

async function operacionCompleja(num1, num2) {

    let suma = await operacion(num1,num2,"suma");
    let multiplicacion = await operacion(suma,2,"multiplicacion");
    let restar = await operacion(multiplicacion,4,"restar");
    let division = await operacion(restar,3,"dividir");
    return division;
}

console.log(await operacionCompleja(10,5).then(m=>console.log(m)));










