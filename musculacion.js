// clase del boton
const botonInicio = document.querySelector(".button1");

// funcion vuelve al inicio
function volverInicio() {
    window.location.href = "index.html";
}

// escuchar el click y llamar a la funcion
botonInicio.addEventListener("click", volverInicio);
