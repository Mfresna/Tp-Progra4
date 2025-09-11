//URL - Endpoints
const URL = "http://localhost:3000/extraterrestres";

//Botones
let btnModificar = document.getElementById("btnModificar");
let btnAgregar = document.getElementById("btnAgregar");
let btnMostrar = document.getElementById("btnMostrar");

//inputs
let id = document.getElementById("id");
let nombre = document.getElementById("nombre");
let planeta = document.getElementById("planeta");
let nivel = document.getElementById("nivel");

//Recuadro de Respuesta
let respuesta = document.getElementById("resultado")

async function cargarJSON() {

    try{
        let response = await fetch(URL);
        let usuarios = await response.json();

        usuarios.forEach(usuario => {
            let extraterrestre = document.createElement("li");
            extraterrestre.textContent = `${usuario.nombre}: ${usuario.id}`;

            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";

            //btnEliminar.addEventListener("click", () => eliminarUsuario(usuario.id));

            extraterrestre.appendChild(btnEliminar);
            respuesta.appendChild(extraterrestre);
        });

    }catch(error){
        alert("Ocurrio un Error con la BD");
        console.log(error);
    }
    
}

cargarJSON();