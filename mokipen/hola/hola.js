function inisiarjuego()  {
    let bottonMascota = document.getElementById("seleccionar")
bottonMascota.addEventListener("click",seleccionarMascota)
}

let spammascota = document.getElementById("nombre")

function seleccionarMascota ()  {
   if(hipodoge.checked){
    spammascota.innerHTML = "hipodoge"
   }else if(capipepo.checked){
    alert("selecionastes a capipepo")
   }else if(ratiueya.checked){
    alert("selecionastes a ratiueya")
   }else {
    alert("selecciona una mascota")
   }
   }

window.addEventListener("load",inisiarjuego)