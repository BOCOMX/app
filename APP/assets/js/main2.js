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