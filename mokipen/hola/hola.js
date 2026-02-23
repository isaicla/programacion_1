function iniciarJuego (){
let botonMascotaJugador =document.getElementById("buton-mascota")
botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){

    let imputChar= document.getElementById ("char")
    let imputBol=document.getElementById("bol")
    let imputPika=document.getElementById("pika")
    let espanMascotaJugador=document.getElementById("mascota-jugador")
    

    if(imputChar.checked){
       espanMascotaJugador.innerHTML ="Char"
    }else if (imputBol.checked){
        espanMascotaJugador.innerHTML="Bol"
    }else if (imputPika.checked){
       espanMascotaJugador.innerHTML="pika"
    }else {
        alert("selecciona una mascota")
    }

     seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo(){

    let ataqueAleatorio=aleatorio(1,3)
    let espanMascotaEnemigo=document.getElementById("mascota-enemigo")

   if (ataqueAleatorio == 1){
     espanMascotaEnemigo.innerHTML= "char"
   }else if (ataqueAleatorio == 2){
    espanMascotaEnemigo.innerHTML="bol"
   }else if (ataqueAleatorio ==3){
    espanMascotaEnemigo.innerHTML="pika"
   }

}

  function aleatorio(min,max)   {
        return Math.floor(Math.random()*(max - min + 1) + min )
          }


window.addEventListener("load",iniciarJuego)