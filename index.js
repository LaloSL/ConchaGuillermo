
// Titulo Index

// Selecciono el header
const titulo = document.querySelector("header h1");

// Almaceno titulo
const texto = titulo.innerText;

// Direccion del texto, con True crece el titulo letra por letra
let expandir = true;

// Primera letra
let longitud = 1;


function rebote() {
    // true expande
    if (expandir) {
        // actualizo el titulo
        titulo.innerText = texto.substring(0, longitud);

        // En la proxima ejecucion muestro la letra siguiente
        longitud++;

        // comparo longitud para saber si invierto direccion
        if (longitud > texto.length) {
            expandir = false;
        }
    } 
    // false contrayendo
    else {
        // Longitud -- para mostrar una letra menos en la proxima ejecucion
        longitud--;

        titulo.innerText = texto.substring(0, longitud);

        // comparo para cambiar de sentido
        if (longitud <= 1) {
            expandir = true;
        }
    }
}

// Ejecuto la funcion cada 200 ms
setInterval(rebote, 200);







