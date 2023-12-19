document.addEventListener("DOMContentLoaded", function () {
    
    let rojo = document.getElementById("rojo")
    let amarillo = document.getElementById("amarillo")
    let verde = document.getElementById("verde")

    rojo.addEventListener("click", function () {
        rojo.classList.toggle("glow")
        amarillo.classList.remove("glow")
        verde.classList.remove("glow")
    })

    amarillo.addEventListener("click", function () {
        amarillo.classList.toggle("glow")
        verde.classList.remove("glow")
        rojo.classList.remove("glow")
    })

    verde.addEventListener("click", function () {
        verde.classList.toggle("glow")
        rojo.classList.remove("glow")
        amarillo.classList.remove("glow")
    })
})

let iniciar = document.getElementById("iniciar")
let cambiar = document.getElementById("cambiar")
let volver = document.getElementById("volver")

function intervalo () {
    verde.classList.toggle("glow")
    rojo.classList.remove("glow")
    amarillo.classList.remove("glow")

    setInterval(() => {

        setTimeout(() => {
            rojo.classList.toggle("glow")
            amarillo.classList.remove("glow")
            verde.classList.remove("glow")
        }, 0);

        setTimeout(() => {
            amarillo.classList.toggle("glow")
            verde.classList.remove("glow")
            rojo.classList.remove("glow")
        }, 2000);

        setTimeout(() => {
            verde.classList.toggle("glow")
            rojo.classList.remove("glow")
            amarillo.classList.remove("glow")
        }, 4000);

    }, 4000);
}

iniciar.addEventListener("click", intervalo)

cambiar.addEventListener("click", ()=>{
    rojo.style.backgroundColor="purple"
    amarillo.style.backgroundColor="blue"
    verde.style.backgroundColor="pink"
})

volver.addEventListener("click", ()=>{
    rojo.style.backgroundColor="red"
    amarillo.style.backgroundColor="yellow"
    verde.style.backgroundColor="green"
})