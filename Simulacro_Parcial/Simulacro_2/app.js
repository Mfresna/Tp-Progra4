//========== URL
const URL = 'http://localhost:3000/dioses'

//========== INPUTS
let InputId = document.getElementById("id");
let InputNombre = document.getElementById("nombre");
let InputDominio = document.getElementById("dominio");
let InputSimbolo = document.getElementById("simbolo");
let InputPoder = document.getElementById("poder");
let InputCiudad = document.getElementById("ciudad");

//========== BOTONES
let btnAgregar = document.getElementById("btnAgregar");
let btnFiltrar = document.getElementById("btnFiltrar");
let btnModificar = document.getElementById("btnModificar");

let resultadoBox = document.getElementById("resultado");

let totalRegistros = 0;

function nuevaTarjeta(obj){
    let tarjeta = document.createElement("li");
    let botonera = document.createElement("div");

    let btnEliminar = document.createElement("button");
    let btnModificar = document.createElement("button");

    let clase = "";

    switch(true){
        case obj.poder >= 95:
            clase= "(Supremo)";
            break;
        case obj.poder >= 85 && obj.poder < 95:
            clase= "(Poderoso)";
            break;
        case obj.poder >= 9000:
            clase= "(Legendario)";
            break;
        default:
            clase= "";
            break;
    }

    tarjeta.innerHTML =
        `<p> Nombre: <strong>${obj.nombre}</strong><br>
            Dominio: ${obj.dominio}<br>
            Simbolo: ${obj.simbolo}<br>
            Poder: ${obj.poder} ${clase}<br>
            Ciudad: ${obj.ciudad}
        </p>`;

    // MODIFICAR
    btnModificar.classList.add("modificar");
    btnModificar.textContent = "Modificar";
    btnModificar.type = "button";
    btnModificar.addEventListener("click", () => {
        event.preventDefault();

        InputId.value = Number(obj.id)
        InputNombre.value = obj.nombre
        InputDominio.value = obj.dominio
        InputSimbolo.value = obj.simbolo
        InputPoder.value = obj.poder
        InputCiudad.value = obj.ciudad
    });

    // ELIMINAR
    btnEliminar.classList.add("eliminar");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.type = "button";
    btnEliminar.addEventListener("click", () => {
        event.preventDefault();
        eliminar(Number(obj.id));
    });

    botonera.appendChild(btnModificar);
    botonera.appendChild(btnEliminar);

    tarjeta.appendChild(botonera);
    
    return tarjeta;
}

function filtrar(obj){

    const matchNombre = InputNombre.value.trim().toLowerCase() ? obj.nombre.trim().toLowerCase().includes(InputNombre.value.trim().toLowerCase()) : true;
    const matchDominio = InputDominio.value.trim().toLowerCase() ? obj.dominio.trim().toLowerCase().includes(InputDominio.value.trim().toLowerCase()) : true;
    const matchSimbolo = InputSimbolo.value.trim().toLowerCase() ? obj.simbolo.trim().toLowerCase().includes(InputSimbolo.value.trim().toLowerCase()) : true;
    const matchCiudad = InputCiudad.value.trim().toLowerCase() ? obj.ciudad.trim().toLowerCase().includes(InputCiudad.value.trim().toLowerCase()) : true;
    const matchPoder = InputPoder.value.trim() ? obj.poder === Number(InputPoder.value.trim()) : true;

    return matchNombre && matchDominio && matchSimbolo && matchCiudad && matchPoder;
}

async function cargarJSON(filtro) {
  try {
    let response = await fetch(URL);
    let objJSON = await response.json();

    totalRegistros = objJSON.length;

    resultadoBox.innerHTML = "";
    let lista = objJSON

    if(filtro){
        lista = objJSON.filter(filtro);
    }
   
    lista.forEach(obj => {
        resultadoBox.appendChild(nuevaTarjeta(obj));
    });

  } catch (error) {
    console.error("Error al cargar Json:", error);
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
    id: Number(totalRegistros+1),
    nombre: InputNombre.value,
    dominio: InputDominio.value,
    simbolo: InputSimbolo.value,
    poder: Number(InputPoder.value),
    ciudad: InputCiudad.value,
  };

  try {
    if (InputId.value !== "" ||
        !InputNombre.checkValidity() ||
        !InputDominio.checkValidity() ||
        !InputSimbolo.checkValidity() ||
        !InputPoder.checkValidity() ||
        !InputCiudad.checkValidity()) {

        alert("No se puede Agregar");
        throw new Error("No se pudo Agregar");
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
        id: Number(InputId.value),
        nombre: InputNombre.value,
        dominio: InputDominio.value,
        simbolo: InputSimbolo.value,
        poder: Number(InputPoder.value),
        ciudad: InputCiudad.value,
  };


    try {
      if (InputId.value === "" ||
        !InputNombre.checkValidity() ||
        !InputDominio.checkValidity() ||
        !InputSimbolo.checkValidity() ||
        !InputPoder.checkValidity() ||
        !InputCiudad.checkValidity()) {
          alert("No se puede ejecutar");
          throw new Error("No se pudo Modificar");
      }

      let actualizado = await fetch(`${URL}/${InputId.value}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(actualizarObj)
      });

        limpiarCampos();

      await cargarJSON();

    } catch (error) {
      console.error("Error al agregar nuevo:", error);
    }
}

function limpiarCampos(){
    InputId.value == ""
    InputNombre.value = ""
    InputDominio.value = ""
    InputSimbolo.value = ""
    InputPoder.value = ""
    InputCiudad.value = ""
}

btnModificar.addEventListener("click", modificar);
btnAgregar.addEventListener("click",agregar);
btnFiltrar.addEventListener("click",() => cargarJSON(filtrar));

cargarJSON()