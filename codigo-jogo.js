let fase = 12
let numeros = []
let filtro = []
let amarelo = document.getElementById("amarelo")
let verde = document.getElementById("verde")
let vermelho = document.getElementById("vermelho")
let start = document.getElementById("start")
let restart = document.getElementById("restart")

restart.style.display = 'none'

function RandomNumbers(){
  for (var i = 0; i < fase; i++) {
    var aleatorio = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    numeros.push(aleatorio)
  }
  console.log(numeros)
  
  let substitui3 = ''
  let substitui1 = ''
  let substitui2 = ''
  let indice = 0
  for(let mostra of numeros){
      filtro.push(mostra)
      indice++
      if(filtro.length === 3){
        if(filtro[0] === filtro[1] && filtro[1] === filtro[2]){

          if(numeros[indice-1] === 3){
            filtro.splice(0)
            substitui3 = Math.floor(Math.random() * (2 - 1 + 1)) + 1
            console.log(`substituiu 3  |  ${numeros[indice-1]=substitui3}  |  vetor numeros ${numeros}`)
          }
          else if(numeros[indice-1] === 1){
            filtro.splice(0)
            substitui1 = Math.floor(Math.random() * (3 - 2 + 1)) + 2
            console.log(`substituiu 1  |  ${numeros[indice-1]=substitui1}  |  vetor numeros ${numeros}`)
          }
          else if(numeros[indice-1] === 2){
            filtro.splice(0)
            substitui2 = Math.floor(Math.random() * (3 - 2 + 1)) + 2
            if(substitui2 === 3 || substitui2 === 1){
              console.log(`substituiu 2a  |  ${numeros[indice-1]=substitui2}  |  vetor numeros ${numeros}`)
              if(substitui2 === 2){
                console.log(`substituiu 2b  |  ${numeros[indice-1]=1}  |  vetor numeros ${numeros}`)
              }
            }
          }
        }
        else{
          filtro.splice(0)
          console.log(`diferença  |  ${numeros[indice]}`)
        }
      }
  }
}
    

function inicio(){
  restart.style.display = 'block'
  start.style.display = 'none'

  
}
      //d[8]=9

      /*
      console.log(`de 1 a 2 == ${substitui = Math.floor(Math.random() * (2 - 1 + 1)) + 1}`)
      console.log(`de 2 a 3 == ${substitui = Math.floor(Math.random() * (3 - 2 + 1)) + 2}`)
      */

