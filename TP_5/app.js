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
function parImpar(numero){
    return new Promise((resolve,reject)=>{
         if(numero % 2 === 0){
            //Ejecuto el cuerpo de la funcion OK
            resolve("El numero " + numero + " es Par");
        }else{
            //Ejecuto el cuerpo de la funcion ERROR
            reject("El numero "+ numero + " es Impar");
        }
    })
}

parImpar(5)
    .then((msj) => console.log(msj))
    .catch((msj) => console.log(msj))

    //EJERCICIO 3
let promesa = new Promise((resolve) =>{
    //Solo va a ser exitosa por eso no le paso un reject
    resolve()
})