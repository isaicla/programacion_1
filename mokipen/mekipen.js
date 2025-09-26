function seleccionarMascotaJugador()  {
      let inputColas=document.getElementById("colas")
      let inputQuin=document.getElementById("quin")
      let inputElRocas=document.getElementById("el rocas")
      

         if(inputColas.checked){
            alert("seleccionastes a colas")
         }else if(inputQuin.checked){
            alert("seleccionaste a Quin")
         }else if(inputElRocas.checked){
            alert("seleccionaste a el rocas")
         }else {
            alert("escoje una mascota")
         }
}    
function reiniciarJuego() {
      let buttonMascotasJugador = document.getElementById("buttonMascotaJugador")
buttonMascotasJugador.addEventListener("click" , seleccionarMascotaJugador)
}
window.addEventListener("load", reiniciarJuego)