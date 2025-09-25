function seleccionarMascotaJugador()  {
         let inputColas = dsoccument.getElementById("cola")
         if(inputColas.checked)
            alert("seleccionastes a colas")
} else if (inputElSonbreroDePaja)  {
        
}
   

function reiniciarJuego() {
      let buttonMascotasJugador = document.getElementById("button-mascota")
buttonMascotasJugador.addEventListener("click" , seleccionarMascotaJugador)
}
window.addEventListener("load", reiniciarJuego)