//========== URL
const URL = 'http://localhost:3000/profesores'

//========== INPUTS
let InputId = document.getElementById("id");
let InputNombre = document.getElementById("nombre");
let InputEdad = document.getElementById("edad");
let InputMateria = document.getElementById("materia");

//========== BOTONES
let btnAgregar = document.getElementById("btnAgregar");
let btnModificar = document.getElementById("btnModificar");
let btnLimpiar = document.getElementById("btnLimpiar");

let resultadoBox = document.getElementById("resultado");


//========== FUNCIONES 

    //InputId
    //InputNombre
    //InputEdad
    //InputMateria


function limpiarCampos(){
    InputId.value = ""
    InputNombre.value = ""
    InputEdad.value = ""
    InputMateria.value = ""
}

function validador(){
    InputNombre.value = InputNombre.value.trim()
    InputEdad.value = InputEdad.value.trim()
    InputMateria.value = InputMateria.value.trim()

    if (!InputNombre.checkValidity() ||
        !InputEdad.checkValidity() ||
        !InputMateria.checkValidity()) {

            if(!InputNombre.checkValidity()){
               return 1
            }else if(!InputMateria.checkValidity()){
                return 2
            }else{
                return 3
            }
    }
    return null
}

function nuevaTarjeta(obj){
    let tarjeta = document.createElement("li");
    let botonera = document.createElement("div");

    let btnEliminar = document.createElement("button");
    let btnModificar = document.createElement("button");


    tarjeta.innerHTML =
        `<p> Nombre: <strong>${obj.nombre}</strong><br>
            Edad: ${obj.edad}<br>
            Materia: ${obj.materia}
        </p>`;

    //================================ BOTONES TARJETAS
        // MODIFICAR
    btnModificar.classList.add("modificar");
    btnModificar.textContent = "Modificar";
    btnModificar.type = "button";

    btnModificar.addEventListener("click", () => {
        event.preventDefault();

        InputId.value = obj.id;
        InputNombre.value = obj.nombre;
        InputEdad.value = obj.edad;
        InputMateria.value = obj.materia;
    });

        // ELIMINAR
    btnEliminar.classList.add("eliminar");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.type = "button";
    btnEliminar.addEventListener("click", () => {
        event.preventDefault();
        eliminar(obj.id);
    });


    botonera.appendChild(btnModificar);
    botonera.appendChild(btnEliminar);

    tarjeta.appendChild(botonera);
    
    return tarjeta;
}

//==== ABM DE PROFESORES

    //OK
async function cargarJSON() {
  try {
    let response = await fetch(URL);
    let objJSON = await response.json();

    resultadoBox.innerHTML = "";
   
    objJSON.forEach(obj => {
        resultadoBox.appendChild(nuevaTarjeta(obj));
    });

  } catch (error) {
    console.error("Error al cargar JSON de Profesores:", error);
  }
}

async function eliminar(id) {
    try {
        await fetch(`${URL}/${id}`, { method: "DELETE" });
        await cargarJSON();
    } catch (error) {
        console.error("Error al intentar eliminar:", error);
    }
}

async function agregar() {
  event.preventDefault();

  let nuevoObj = {
    nombre: InputNombre.value,
    edad: InputEdad.value,
    materia: InputMateria.value
  };

  try {
    //Valida que los campos esten validos (segun restricciones html)
    let validar = validador();

    if (InputId.value !== "" || validar) {

        if(validar === 1){
            alert("No se puede Agregar el Profesor - Falta el Nombre"); 
        }else if(validar === 2){
            alert("No se puede Agregar el Profesor - Falta la Materia");
        }else{
            alert("No se puede Agregar el Profesor");
        }

        throw new Error("No se pudo Agregar Nuevo");
    }

    await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoObj)
    });

    limpiarCampos();
    await cargarJSON();

  } catch (error) {
    console.error("Error al agregar nuevo:", error);
  }
}

async function modificar() {
    event.preventDefault();

    let actualizarObj = {
        nombre: InputNombre.value,
        edad: InputEdad.value,
        materia: InputMateria.value
    };

    let validar = validador();

    if (validar) {

        if(validar === 1){
            alert("No se puede Modificar el Profesor - Falta el Nombre"); 
        }else if(validar === 2){
            alert("No se puede Modificar el Profesor - Falta la Materia");
        }else{
            alert("No se puede Modificar el Profesor");
        }

        throw new Error("No se pudo Agregar Nuevo");
    }

    try {
      
        await fetch(`${URL}/${InputId.value}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(actualizarObj)
        });

        limpiarCampos();
        await cargarJSON();

    } catch (error) {
        alert("No se pudo Modificar ID: ",InputId.value);
        limpiarCampos();
        console.error("Error al Modificar!", error);
    }
}

btnModificar.addEventListener("click", modificar);
btnAgregar.addEventListener("click",agregar);
btnLimpiar.addEventListener("click",() => limpiarCampos());

cargarJSON();