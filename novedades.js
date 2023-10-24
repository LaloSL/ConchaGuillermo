// array de imagenes
let imagenes = [
    {
        "url": "imagenes/img1.webp",
        "nombre": "Proteínas",
        "descripcion": "Nuestros combos te brindan las herramientas esenciales para alcanzar tus objetivos deportivos. ¡Descubre cómo podemos ayudarte a tener un rendimineto excepcional!"

    },
    {
        "url": "imagenes/img2.jpg",
        "nombre": "Anticipo Verano",
        "descripcion": "Cuida tu rutina de entrenamiento, tu dieta y tambien tu vestir ¡LA ROPA DEFINE TU ESTILO DEPORTIVO!"

    },
    {
        "url": "imagenes/img3.webp",
        "nombre": "foto3 ",
        "descripcion": "jfgsjdgfaskdjf"

    },
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}