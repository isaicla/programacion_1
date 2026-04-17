let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let seccionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    seccionSeleccionarAtaque.style.display = "none"

    let seccionReiniciar = document.getElementById("reiniciar")
    seccionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonRallo = document.getElementById("boton-rallo")
    botonRallo.addEventListener("click", ataqueRayo)
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonPlanta = document.getElementById("boton-planta")
    botonPlanta.addEventListener("click", ataquePlanta)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let inputLuffy = document.getElementById("luffy")
    let inputZoro = document.getElementById("zoro")
    let inputSanji = document.getElementById("sanji")
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    let spanMascotaComputadora = document.getElementById("mascota-computadora")

    if (inputLuffy.checked) {
        spanMascotaJugador.innerHTML = "Luffy"
    } else if (inputZoro.checked) {
        spanMascotaJugador.innerHTML = "Zoro"
    } else if (inputSanji.checked) {
        spanMascotaJugador.innerHTML = "Sanji"
    } else {
        alert("Selecciona una mascota")
        return
    }

    let seccionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    seccionSeleccionarMascota.style.display = "none"

    let seccionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    seccionSeleccionarAtaque.style.display = "flex"

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 3)
    let spanMascotaComputadora = document.getElementById("mascota-computadora")

    if (mascotaAleatorio == 1) {
        spanMascotaComputadora.innerHTML = "Luffy"
    } else if (mascotaAleatorio == 2) {
        spanMascotaComputadora.innerHTML = "Zoro"
    } else if (mascotaAleatorio == 3) {
        spanMascotaComputadora.innerHTML = "Sanji"
    }
}

function ataqueRayo() {
    ataqueJugador = "rayo"
    ataqueAleatorioEnemigo()
}

function ataqueFuego() {
    ataqueJugador = "fuego"
    ataqueAleatorioEnemigo()
}

function ataquePlanta() {
    ataqueJugador = "planta"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "rayo"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "fuego"
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = "planta"
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasComputadora = document.getElementById("vidas-computadora")

    if (ataqueEnemigo == ataqueJugador) {
        crearMensajes("EMPATE")
    } else if (
        (ataqueJugador == "rayo" && ataqueEnemigo == "planta") ||
        (ataqueJugador == "fuego" && ataqueEnemigo == "rayo") ||
        (ataqueJugador == "planta" && ataqueEnemigo == "fuego")
    ) {
        crearMensajes("GANASTE")
        vidasEnemigo--
        spanVidasComputadora.innerHTML = vidasEnemigo
    } else {
        crearMensajes("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajesFinal("¡FELICIDADES, GANASTE! 🎉")
        deshabilitarBotones()
    } else if (vidasJugador == 0) {
        crearMensajesFinal("LO SIENTO, PERDISTE 😭")
        deshabilitarBotones()
    }
}

function deshabilitarBotones() {
    let botonRallo = document.getElementById("boton-rallo")
    botonRallo.disabled = true
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonPlanta = document.getElementById("boton-planta")
    botonPlanta.disabled = true

    let seccionReiniciar = document.getElementById("reiniciar")
    seccionReiniciar.style.display = "block"
}

function crearMensajes(resultado) {
    let seccionMensajes = document.getElementById("mensajes")
    seccionMensajes.innerHTML = ""

    let parrafo = document.createElement("p")
    parrafo.innerHTML = `Tu mascota atacó con <b>${ataqueJugador}</b>, y la mascota del enemigo con <b>${ataqueEnemigo}</b>. ${resultado}`

    seccionMensajes.appendChild(parrafo)
}

function crearMensajesFinal(resultadoFinal) {
    let seccionMensajes = document.getElementById("mensajes")
    seccionMensajes.innerHTML = ""

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal

    seccionMensajes.appendChild(parrafo)
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)
