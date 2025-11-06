function inisiarjuego()  {
    let bottonMascota =document.getElementById("seleccionar")
bottonMascota.addEventListener("click",seleccionarMascota)
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
    let aleatorio = aleatorio (1.3) 
    let spanEnemigo=document.getElementById("mascota_enemigo")

    if (aleatorio == 1 ){
       spanEnemigo.innerHTML= "HIPODOGE"
    }else if (aleatorio == 2) {
        spanEnemigo.innerHTML= "CAPIPEPO"
    }else  {
       spanEnemigo.innerHTML=  "RATIUEYA"
    }
        
    
}

   function aleatorio(min,max)   {
        return Math.floor(Math.random()*(max - min + 1) + min )
      }

window.addEventListener("load",inisiarjuego)