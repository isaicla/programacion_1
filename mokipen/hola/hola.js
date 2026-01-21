let ataquejugador=""


function inisiarjuego()  {
    let bottonMascota =document.getElementById("seleccionar")
bottonMascota.addEventListener("click",seleccionarMascota)
bottonMascota.addEventListener("click",seleccionarMascotaEnemigo)

let botonFuego=document.getElementById("boton-fuego")
botonFuego.addEventListener("click",ataqueFuego)
let botonAgua=document.getElementById("boton-agua")
botonAgua.addEventListener("click",ataqueAgua)
let botonTierra=document.getElementById("boton-tierra")
botonTierra.addEventListener("click",ataqueTierra)


}


function seleccionarMascota ()  {
    let inputHipodoge =document.getElementById("hipodoge")
let inputcapipepo=document.getElementById("capipepo")
let inputRatigueya=document.getElementById("ratiueya")
let spanMascotaJugador=document.getElementById("hols")


   if(inputHipodoge.checked){
    spanMascotaJugador.innerHTML = "Hipodoge"
   }else if(inputcapipepo.checked){
    spanMascotaJugador.innerHTML = "capipepo"
   }else if(ratiueya.checked){
    spanMascotaJugador.innerHTML = "ratiueya"
   }else {
    alert("selecciona una mascota")
} 

}
function seleccionarMascotaEnemigo ()  {
    let getaleatorio = aleatorio (1,3) ;
    let spanEnemigo=document.getElementById("mascota_enemigo");

    if (getaleatorio == 1 ){
       spanEnemigo.innerHTML= "capipepo"
    }else if (getaleatorio == 2) {
        spanEnemigo.innerHTML="ratiueya"
    }else  {
       spanEnemigo.innerHTML=  "hipodoge"
    }
        
    
}

  

function ataqueFuego() {
    ataqueJugador = 'FUEGO';
   ataqueEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA';
   ataqueEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA';
  ataqueEnemigo()
}

 function ataqueEnemigo() {
    
 }
    

   
        
        
          

    
     function aleatorio(min,max)   {
        return Math.floor(Math.random()*(max - min + 1) + min )
      }

window.addEventListener("load",inisiarjuego)