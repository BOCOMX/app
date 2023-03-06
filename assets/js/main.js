/*=============== ACTIVE LINK ===============*/
const navlink = document.querySelectorAll('.nav__link')

function activeLink(){
navlink.forEach((item) => item.classList.remove('active-link'))
this.classList.add('active-link')
}

navlink.forEach((item) => item.addEventListener('click', activeLink))

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

/*=============== PANTALLA ADOPTAR ===============*/

// Obtener los botones y los modales
var modalBtn1 = document.getElementById("modal-btn-1");
var modalBtn2 = document.getElementById("modal-btn-2");
var modalBtn3 = document.getElementById("modal-btn-3");
var modalBtn4 = document.getElementById("modal-btn-4");
var modalBtn5 = document.getElementById("modal-btn-5");
var modalBtn6 = document.getElementById("modal-btn-6");
var modalBtn7 = document.getElementById("modal-btn-7");

var modal1 = document.getElementById("modal-1");
var modal2 = document.getElementById("modal-2");
var modal3 = document.getElementById("modal-3");
var modal4 = document.getElementById("modal-4");
var modal5 = document.getElementById("modal-5");
var modal6 = document.getElementById("modal-6");
var modal7 = document.getElementById("modal-7");

// Obtener el span que cierra el modal
var close1 = modal1.querySelector(".close");
var close2 = modal2.querySelector(".close");
var close3 = modal3.querySelector(".close");
var close4 = modal4.querySelector(".close");
var close5 = modal5.querySelector(".close");
var close6 = modal6.querySelector(".close");
var close7 = modal7.querySelector(".close");

// Cuando se hace clic en el botón, mostrar el modal
modalBtn1.onclick = function() {
  modal1.style.display = "block";
}

modalBtn2.onclick = function() {
  modal2.style.display = "block";
}

modalBtn3.onclick = function() {
  modal3.style.display = "block";
}

modalBtn4.onclick = function() {
  modal4.style.display = "block";
}

modalBtn5.onclick = function() {
  modal5.style.display = "block";
}

modalBtn6.onclick = function() {
  modal6.style.display = "block";
}

modalBtn7.onclick = function() {
  modal7.style.display = "block";
}


// Cuando se hace clic en el span (x), cerrar el modal
close1.onclick = function() {
  modal1.style.display = "none";
}

close2.onclick = function() {
  modal2.style.display = "none";
}

close3.onclick = function() {
  modal3.style.display = "none";
}

close4.onclick = function() {
  modal4.style.display = "none";
}

close5.onclick = function() {
  modal5.style.display = "none";
}

close6.onclick = function() {
  modal6.style.display = "none";
}

close7.onclick = function() {
  modal7.style.display = "none";
}


//FOTOS PERFIL MASCOTAS
// Definimos la función showSlides que se encarga de mostrar las imágenes
function showSlides(containerId, slideIndex) {
  // Obtenemos el contenedor y las imágenes
  const container = document.getElementById(containerId);
  const slides = container.getElementsByClassName("mySlidesfotos");
  const dots = container.getElementsByClassName("demofotos");
  
  // Comprobamos si el índice de la imagen actual es mayor que el número de imágenes, o menor que 1, y en ese caso, lo ajustamos
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  
  // Ocultamos todas las imágenes y eliminamos la clase "activefotos" de los puntos
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activefotos", "");
  }
  
  // Mostramos la imagen actual y añadimos la clase "activefotos" al punto correspondiente
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activefotos";
}

// Definimos las funciones plusSlides y currentSlide, que se utilizan para avanzar o retroceder entre las imágenes
function plusSlides(containerId, j) {
  showSlides(containerId, slideIndex += j);
}

function currentSlide(containerId, j) {
  showSlides(containerId, slideIndex = j);
}

// Asignamos un listener al evento load de la ventana, para que se cargue el script cuando la página esté completamente cargada
window.addEventListener("load", () => {
  // Obtenemos todos los contenedores de slideshow en la página
  const containers = document.getElementsByClassName("slideshow-container");
  
  // Iteramos sobre cada contenedor y le asignamos los listeners a los puntos y flechas correspondientes
  for (let i = 0; i < containers.length; i++) {
    const container = containers[i];
    let slideIndex = 1;
    
    const prev = container.querySelector(".prevfotos");
    if (prev) {
      prev.addEventListener("click", () => plusSlides(container.id, -1));
    }
    
    const next = container.querySelector(".nextfotos");
    if (next) {
      next.addEventListener("click", () => plusSlides(container.id, 1));
    }
    
    const dots = container.getElementsByClassName("demofotos");
    for (let j = 0; j < dots.length; j++) {
      dots[j].addEventListener("click", () => currentSlide(container.id, j+1));
    }
    
    // Mostramos la primera imagen al cargar la página
    showSlides(container.id, slideIndex);
  }
});


/*=============== MOSTRAR Y OCULTAR MASCOTAS ===============*/

const targetmascots = document.querySelectorAll('[data-targetmascot]')
const contentmascot = document.querySelectorAll('[data-contentmascot]')

targetmascots.forEach(targetmascot => {

    targetmascot.addEventListener('click', () => {

        contentmascot.forEach(cm => {
            cm.classList.remove('active-btnmascot')
        })

        const tm = document.querySelector(targetmascot.dataset.targetmascot)

        tm.classList.add('active-btnmascot')

    })
})

/*=============== BOTÓN ACTIVADO MASCOTAS ===============*/

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btnmascot");

for (var i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function() {

  var current = document.getElementsByClassName("active");

  current[0].className = current[0].className.replace(" active", "");

  this.className += " active";

  });
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

/*=============== COPIAR AL PORTAPAPELES ===============*/

var copybtn = document.getElementById("copy-btn");
        var link = document.getElementById("link");

        copybtn.onclick = function () {
            navigator.clipboard.writeText(link.innerHTML);
            copybtn.innerHTML = "Copiado"
            setTimeout(function (){
                copybtn.innerHTML = "Copiar"
            }, 2000)
        }

/*=============== MODAL REQUISITOS ===============*/

function mostrarModala() {
    document.getElementById("miModala").style.display = "block";
}

function cerrarModala() {
    document.getElementById("miModala").style.display = "none";
}

/*=============== MODAL REQUISITOS 2 ===============*/

function mostrarModalb() {
    document.getElementById("miModalb").style.display = "block";
}

function cerrarModalb() {
    document.getElementById("miModalb").style.display = "none";
}