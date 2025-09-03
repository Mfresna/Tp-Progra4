    //EJERCICIO 1

let msj = document.getElementById("mensaje");

msj.innerText = "Hola Matias";


    //EJERCICIO 2
let parrafo =document.getElementById("mensaje");

parrafo.addEventListener("click", () =>{
    parrafo.style.backgroundColor = "green";
    parrafo.style.color = "red";
    parrafo.style.textAlign= "center";
})

//     //EJERCICIO 3
// let nuevoElemento = document.createElement("li");
// nuevoElemento.innerText="Nuevo Elemento";

//     //agrega elemento
// document.getElementById("btnAgregar").addEventListener("click",()=>{
//     document.getElementById("lista").appendChild(nuevoElemento);
// })

//     //elimina el ultimo
// document.getElementById("btnEliminar").addEventListener("click",()=>{
//     document.getElementById("lista").lastElementChild.remove();
// })

    //EJERCICIO 3 - OTRA VERSION
let nuevoElemento = document.createElement("li");
nuevoElemento.innerText="Nuevo Elemento";

    //agrega elemento
document.getElementById("btnAgregar").addEventListener("click",()=>{
    let nombreVal = document.createElement("li")
    nombreVal.innerText = document.getElementById("nombre").value;

    document.getElementById("lista").appendChild(nombreVal);

    document.getElementById("nombre").value = "";

})

    //elimina el ultimo
document.getElementById("btnEliminar").addEventListener("click",()=>{
    document.getElementById("lista").lastElementChild.remove();
})


    //EJERCICIO 4
document.getElementById("enviar").addEventListener("click",(e)=>{
    e.preventDefault();

    let nombre = document.getElementById("nombre");
    let mail = document.getElementById("email");

    if(!nombre.checkValidity() || !mail.checkValidity()){
        alert("Debe ingresar todos los datos Correctamente!");
    }else{
        let nuevaLinea = document.createElement("li")
        nuevaLinea.innerText = nombre.value + ' - ' + mail.value;

        document.getElementById("listaResultados").prepend(nuevaLinea);

        //Limpio los Campos
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
    }
    

})


