// Función para cambiar el idioma y guardar la selección en el almacenamiento local
function cambiarIdioma(lang) {
    if (lang === 'es') {
        localStorage.setItem('idioma', 'es'); // Guarda 'es' en el almacenamiento local
        window.location.href = 'bocoapp.html'; // Redirige al archivo en español
    } else if (lang === 'en') {
        localStorage.setItem('idioma', 'en'); // Guarda 'en' en el almacenamiento local
        window.location.href = 'bocoapp-en.html'; // Redirige al archivo en inglés
    }
}

// Función para cargar el idioma guardado del almacenamiento local al cargar la página
function cargarIdioma() {
    const idiomaGuardado = localStorage.getItem('idioma');
    if (idiomaGuardado === 'es' && window.location.href.includes('bocoapp-en.html')) {
        window.location.href = 'bocoapp.html'; // Redirige al archivo en español
    } else if (idiomaGuardado === 'en' && window.location.href.includes('bocoapp.html')) {
        window.location.href = 'bocoapp-en.html'; // Redirige al archivo en inglés
    }
}

// Llama a la función para cargar el idioma al cargar la página
window.addEventListener('load', cargarIdioma);



/*==================== PRELOADER Y LLEVAR PÁGINA ARRIBA AL RECARGAR ====================*/
window.addEventListener('load', () => {
  const contenedor_loader = document.querySelector('.contenedor_loader');
  contenedor_loader.style.opacity = 0;
  contenedor_loader.style.visibility = 'hidden';
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 250);
});

/*=============== ACTIVE LINK ===============*/
const navlink = document.querySelectorAll('.nav__link');
const configBtn = document.querySelector('.btnicons');
const indicator = document.querySelector('.indicator');

function activeLink() {
    navlink.forEach(item => item.classList.remove('active-link'));
    this.classList.add('active-link');
    showIndicator(); // Asegurarse de que el indicador esté visible cuando se hace clic en cualquier enlace del menú
}

function showIndicator() {
    indicator.style.display = 'block';
}

function hideIndicator() {
    indicator.style.display = 'none';
}

navlink.forEach(item => item.addEventListener('click', activeLink));

configBtn.addEventListener('click', () => {
    navlink.forEach(item => item.classList.remove('active-link'));
    hideIndicator(); // Ocultar el indicador cuando se hace clic en el botón de configuraciones
});


/*=============== OCULTAR Y MOSTRAR VENTANAS ===============*/

const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')

targets.forEach(target => {

    target.addEventListener('click', () => {

        content.forEach(c => {
            c.classList.remove('active-content')
        })

        const t = document.querySelector(target.dataset.target)

        t.classList.add('active-content')

        window.scrollTo(0, 0);

    })
})


/*=============== FULL IMAGENES EN EL INICIO ===============*/

const fullImgBox = document.getElementById("fullImgBox"),
fullImg = document.getElementById("fullImg");

function openFullImg(reference){
    fullImgBox.style.display = "flex";
    fullImg.src = reference;
}

function closeImg(){
    fullImgBox.style.display = "none";
}


/*=============== PANTALLA TIENDA ===============*/

// Obtener los botones y los modales
var modalproductoBtn1 = document.getElementById("modalproducto-btn-1");

var modalproducto1 = document.getElementById("modalproducto-1");

// Obtener el span que cierra el modal
var close1 = modalproducto1.querySelector(".close");

// Cuando se hace clic en el botón, mostrar el modal
modalproductoBtn1.onclick = function() {
  modalproducto1.style.display = "block";
}
// Cuando se hace clic en el span (x), cerrar el modal
close1.onclick = function() {
  modalproducto1.style.display = "none";
}

/*================ MODO OSCURO ================*/

document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.querySelector('.configboco-btn');
    const darkTheme = 'modo-oscuro';

    // Obtener el tema actual aplicando las clases
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

    // Si se selecciona un tema previamente, aplicarlo
    const selectedTheme = localStorage.getItem('modoOscuro');

    if (selectedTheme === 'activado') {
        document.body.classList.add(darkTheme);
        themeButton.textContent = 'Desactivar';
    } else {
        themeButton.textContent = 'Activar';
    }

    // Activar/desactivar el tema manualmente con el botón
    themeButton.addEventListener('click', () => {
        // Añadir o quitar el tema oscuro
        document.body.classList.toggle(darkTheme);
        const currentTheme = getCurrentTheme();
        // Guardar el tema actual que el usuario eligió
        localStorage.setItem('modoOscuro', currentTheme === 'dark' ? 'activado' : 'desactivado');
        // Actualizar el texto del botón
        themeButton.textContent = currentTheme === 'dark' ? 'Desactivar' : 'Activar';
    });

    window.onload = function() {
        // Ocultar el preloader después de que todo se ha cargado
        const preloader = document.querySelector('.contenedor_loader');
        if (preloader) {
            preloader.style.display = 'none';
        }
    }
});
