let promesa = new Promise((resolve, reject)=>{
    //Funcion de la promesa
    let numero = Math.floor(Math.random()*10);

    if(numero % 2 === 0){
        //Ejecuto el cuerpo de la funcion OK
        resolve("El numero " + numero + " es Par");
    }else{
        //Ejecuto el cuerpo de la funcion ERROR
        reject("El numero "+ numero + " es Impar");
    }
});

promesa
    .then(1)
    .catch((mensaje) => {console.log("ERROR: " + mensaje);})
