 function aleatorio(min,max){
                return Math.floor(Math.random() *  (max - min + 1) + min)
            } 

function eleccion(jugada) {                
                    let resultado =""
                    if(jugada == 1) { 
                       resultado = "piedra 🪨 "  
                } else if(jugada == 2) { 
                  resultado = "papel 🧻 "
                }else if(jugada == 3) {
                    resultado="tijera ✂️ "  
                }else{
                    resultado = "MAL ELECCION"
                } 
                return resultado

            }

            function combate(pc, jugador) {
                let diff = (jugador - pc + 3) % 3;
                if (diff == 0) {
                    alert("empate");
                } else if (diff == 1) {
                    alert("ganaste");
                    triunfos++;
                } else {
                    alert("perdiste");
                    perdidas++;
                }
            }

                   
            // 1 es piedra, 2 es papel, 3 es tijera
             let jugador = 0
             let pc= 0 
             let triunfos=0
             let perdidas=0
            
             while(triunfos < 3 && perdidas < 3) {
                pc = aleatorio(1,3)
             jugador = prompt("elige:1 para piedra, 2 para papel, 3 para tijera")
             //alert("elegiste " + jugador )
             alert("pc elige:  " + eleccion(pc))
             alert("tu eliges:" + eleccion(jugador)) 

               
            //combate
            combate(pc, jugador);
             }
            alert("Ganaste: " + triunfos + " Perdidas: " + perdidas)
          