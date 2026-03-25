let ataqueJugador
let ataqueEnemigo
let vidasJugador =3
let vidasEnemigo =3

function iniciarJuego (){
let  seccionseleccionarataque=document.getElementById("seleccionar-ataque")
seccionseleccionarataque.style.display="none"

let seccionReiniciar=document.getElementById("reiniciar")
seccionReiniciar.style.display ="none"

let botonMascotaJugador =document.getElementById("buton-mascota")
botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)

let botonRallo =document.getElementById("boton-rallo")
botonRallo.addEventListener("click", ataqueRallo)
let botonFeugo=document.getElementById("boton-fuego")
botonFeugo.addEventListener("click", ataqueFuego)
let botonPlanta=document.getElementById("boton-planta")
botonPlanta.addEventListener("click", ataquePlanta)

let botonReiniciar=document.getElementById("boton-reiniciar")
botonReiniciar.addEventListener("click",reiniciarJuago)
}


function seleccionarMascotaJugador(){
let  seccionseleccionarMascota=document.getElementById("seleccionar-mascota")
 seccionseleccionarMascota.style.display="none"


let  seccionseleccionarataque=document.getElementById("seleccionar-ataque")
seccionseleccionarataque.style.display="flex"

    let imputChar= document.getElementById ("luffy")
    let imputBol=document.getElementById("zoro")
    let imputPika=document.getElementById("sanji")
    let espanMascotaJugador=document.getElementById("mascota-jugador")
    

    if(imputChar.checked){
       espanMascotaJugador.innerHTML ="luffy"
    }else if (imputBol.checked){
        espanMascotaJugador.innerHTML="zoro"
    }else if (imputPika.checked){
       espanMascotaJugador.innerHTML="sanji"
    }else {
        alert("selecciona una mascota")
    }

     seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo(){

    let mascotaAleatorio=aleatorio(1,3)
    let espanMascotaEnemigo=document.getElementById("mascota-Enemigo")

   if (mascotaAleatorio== 1){
     espanMascotaEnemigo.innerHTML= "luffy"
   }else if (mascotaAleatorio == 2){
    espanMascotaEnemigo.innerHTML="zoro"
   }else if (mascotaAleatorio ==3){
    espanMascotaEnemigo.innerHTML="sanji"
   }

}

function ataqueRallo (){
  ataqueJugador="rallo"
   ataqueAlaatorioEnemigo()
}

function ataqueFuego (){
  ataqueJugador="fuego"
  ataqueAlaatorioEnemigo()
}

function ataquePlanta(){
  ataqueJugador="planta"
   ataqueAlaatorioEnemigo()
}

 function ataqueAlaatorioEnemigo(){
    ataqueAleatorio=aleatorio(1,3)
    
    if(ataqueAleatorio == 1){
      ataqueEnemigo ="rallo"
    }else if(ataqueEnemigo == 2){
      ataqueEnemigo="fuego"
    }else if(ataqueAleatorio == 3){
      ataqueEnemigo ="planta"
    }

   conbate()
 }



 function conbate(){
      
      let espanVidasJugador=document.getElementById("vidas-jugador")  
      let espanVidasEnemigo=document.getElementById("vidas-enemigo")
          
      if(ataqueEnemigo == ataqueJugador)    {
           crearMensajes("EMPATE")
         }else if (ataqueJugador == "rallo" && ataqueEnemigo == "fuego")   {
           crearMensajes("GANASTES")
          vidasEnemigo--
           espanVidasEnemigo.innerHTML=vidasEnemigo
         }else if (ataqueJugador == "fuego" &&  ataqueEnemigo == "planta")  {
           crearMensajes ("GANASTES")
             vidasEnemigo--
             espanVidasEnemigo.innerHTML=vidasEnemigo
         }else if  (ataqueJugador == "planta" && ataqueEnemigo == "rallo")    {
         crearMensajes("GANASTE")
         vidasEnemigo--
          espanVidasEnemigo.innerHTML=vidasEnemigo
         }else     {
          crearMensajes ("PERDISTES")
          vidasJugador--
          espanVidasJugador.innerHTML=vidasJugador
         }

         revisarVidas()
 }

 function revisarVidas(){
   if(vidasEnemigo == 0){
   crearMensajesFinal("felicidades ganaste 🎉🎊")
   }else if (vidasJugador == 0){
   crearMensajesFinal ("lo siento perdiste 😭😭")
   }

 }

 function crearMensajes(resultado){

   let seccionMensjes=document.getElementById("mensajes")

   let parrafo=document.createElement("p")
   parrafo.innerHTML="tu mascota atacoco "+ataqueJugador+", y la mascota del enemigo con "+ataqueEnemigo+","+ resultado

  seccionMensjes.appendChild(parrafo)
}

 function crearMensajesFinal(resultadoFinal){

   let seccionMensjes=document.getElementById("mensajes")

   let parrafo=document.createElement("p")
   parrafo.innerHTML=resultadoFinal

  seccionMensjes.appendChild(parrafo)

  let botonRallo =document.getElementById("boton-rallo")
botonRallo.disabled =true
let botonFeugo=document.getElementById("boton-fuego")
botonFeugo.disabled =true
let botonPlanta=document.getElementById("boton-planta")
botonPlanta.disabled =true

let seccionReiniciar=document.getElementById("reiniciar")
seccionReiniciar.style.display ="block "
}

function reiniciarJuago(){
  location.reload()
}


  function aleatorio(min,max)   {
        return Math.floor(Math.random()*(max - min + 1) + min )
          }


window.addEventListener("load",iniciarJuego)