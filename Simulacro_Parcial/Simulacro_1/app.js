//----- URL
const URL = "http://localhost:3000/extraterrestres"


//------BOTONES
let btnAgregar = document.getElementById("btnAgregar")
let btnModificar = document.getElementById("btnModificar");

//-----INPUTS
let idInput = document.getElementById("id");
let nombreInput = document.getElementById("nombre");
let planetaInput = document.getElementById("planeta");
let nivelInput = document.getElementById("nivel");

let respuestabox = document.getElementById("resultado");

let totalRegistros = 0;

async function cargarJSON() {

  try {
    let response = await fetch(URL);
    let objJSON = await response.json();

    totalRegistros = objJSON.length;

    objJSON.forEach(obj => {
        let tarjeta = document.createElement("li");
        let botonera = document.createElement("div");

        let btnEliminar = document.createElement("button");
        let btnModificar = document.createElement("button");

        tarjeta.innerHTML =
            `<p> Nombre: <strong>${obj.nombre}</strong><br>
                Planeta: ${obj.planeta}<br>
                Nivel Poder: ${obj.nivelPoder}
            </p>`

            //MODIFICAR
        btnModificar.classList.add("modificar");
        btnModificar.textContent = "Modificar";
        btnModificar.type = "button";
        btnModificar.addEventListener("click",()=>{
            event.preventDefault();
            idInput.value = obj.id;
            nombreInput.value = obj.nombre;
            planetaInput.value = obj.planeta;
            nivelInput.value = obj.nivelPoder;
        });

            //ELIMINAR
        btnEliminar.classList.add("eliminar");
        btnEliminar.textContent = "Eliminar";
        btnModificar.type = "button";
        btnEliminar.addEventListener("click",()=>{
            event.preventDefault();
            eliminar(obj.id);
        });


        botonera.appendChild(btnModificar);
        botonera.appendChild(btnEliminar);

        tarjeta.appendChild(botonera);
        respuestabox.appendChild(tarjeta);
    });
  } catch (error) {
    console.error("Error al cargar Json:", error);
  }
}

async function eliminar(id) {
    try { 
        await fetch(`${URL}/${id}`, { method: "DELETE" });  
    } catch (error) {
         console.error("Error al intentar eliminar:", error);
    }
}

async function agregar() {
  event.preventDefault(); 
    
  let nuevoObj = {
    id:(totalRegistros + 1).toString(),
    nombre: nombreInput.value,
    planeta: planetaInput.value,
    nivelPoder: nivelInput.value
  };

  try {
    if(idInput.value !== "" || nivelInput.value < 0 || nivelInput.value > 100 ){
        alert("No se puede ejecutar");
        throw new Error("No se pudo Agregar");
    }
    await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoObj)
    });

    idInput.value = "";
    nombreInput.value = "";
    planetaInput.value = "";
    nivelInput.value = "";

    await cargarJSON();

  } catch (error) {
    console.error("Error al agregar nuevo:", error);
  }
}


btnAgregar.addEventListener("click",()=>{
    agregar();
})

cargarJSON();