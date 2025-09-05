    //EJERCICIO 1
// let promesa = new Promise((resolve, reject)=>{
//     //Funcion de la promesa
//     let numero = Math.floor(Math.random()*10);
//     setTimeout(()=>{
//         if(numero % 2 === 0){
//             //Ejecuto el cuerpo de la funcion OK
//             resolve("El numero " + numero + " es Par");
//         }else{
//             //Ejecuto el cuerpo de la funcion ERROR
//             reject("El numero "+ numero + " es Impar");
//         }
//     },2000);
// });

// promesa
//     .then((mensaje) => {console.log(mensaje);})
//     .catch((mensaje) => {console.log("ERROR: " + mensaje);})

    //EJERCICIO 2
// function parImpar(numero){
//     return new Promise((resolve,reject)=>{
//          if(numero % 2 === 0){
//             //Ejecuto el cuerpo de la funcion OK
//             resolve("El numero " + numero + " es Par");
//         }else{
//             //Ejecuto el cuerpo de la funcion ERROR
//             reject("El numero "+ numero + " es Impar");
//         }
//     })
// }

// parImpar(5)
//     .then((msj) => console.log(msj))
//     .catch((msj) => console.log(msj))

    //EJERCICIO 3
// let promesa = new Promise((resolve) =>{
//     //Solo va a ser exitosa por eso no le paso un reject
//     resolve(10);
// })

// promesa
//     .then(num => num + 5)
//     .then(num => num*2)
//     .then(num => console.log('El resultado es:', num));

    //EJERCICIO 4
function cargarDatos(){
    return new Promise((resolve)=>{
        console.log('Cargando...');
        setTimeout(() => {
            resolve('Datos cargados!')
        },3000)
    });
}

cargarDatos().then(msj => console.log(msj));

    //EJERCICIO 5

function calcular(){
    return new Promise((resolve) =>{
        let numero = Math.floor(Math.random()*10);
        setTimeout(()=>{
            if(numero % 2 === 0){
                //Ejecuto el cuerpo de la funcion OK
                console.log;("El numero " + numero + " es Par");
            }else{
                //Ejecuto el cuerpo de la funcion ERROR
                reject("El numero "+ numero + " es Impar");
            }
        },2000);
    });
}

async function parImpar(){
    console.log('Esperando el caluclo...');
    await calcular();
    console.log('Dato Calculado');
}

parImpar();