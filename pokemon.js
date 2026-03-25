function iniciarJuego() {
    let buttonPokemonjugador = document.getElementById("button-pokemon")
buttonPokemonjugador.addEventListener("click", seleccionarPokemonJugador)
   
alert("Bienvenido a Pokemon 2.0, elige a tu pokemon para comenzar la aventura")
}
    function seleccionarPokemonJugador() { 
        let inputcharmander = document.getElementById("charmander")
        
        let inputsquirtle = document.getElementById('squirtle'); 
        
        let inputbulbasaur = document.getElementById('bulbasaur');
        let inputpikachu = document.getElementById('pikachu');

    if(inputcharmander.checked){
        alert("Has seleccionado a Charmander, un pokemon de tipo fuego🔥")
    }else if(inputsquirtle.checked){
        alert("Has seleccionado a squirtle, un pokemon de tipo agua💧")
    }else if(inputbulbasaur.checked){
        alert("Has seleccionado a bulbasaur, un pokemon de tipo planta🌱")
    }else if(inputpikachu.checked){
        alert("Has seleccionado a pikachu, un pokemon de tipo electrico⚡")
    }else
    alert("Selecciona un pokemon para comenzar la aventura")
}

window.addEventListener("load", iniciarJuego)
