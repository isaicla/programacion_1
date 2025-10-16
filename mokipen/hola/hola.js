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



      }
    
        
      
        
   function aleatorio(min,max)   {
        return Math.floor(Math.random()*(max - min + 1) + min )
      

          }
        
        

window.addEventListener("load",inisiarjuego)