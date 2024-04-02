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
