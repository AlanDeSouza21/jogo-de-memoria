let fase = 2
let calc_Fase = fase * 2
let numeros = []
let filtro = []
let amarelo = document.getElementById("amarelo")
let verde = document.getElementById("verde")
let vermelho = document.getElementById("vermelho")
let start = document.getElementById("start")
let restart = document.getElementById("restart")
let puntuacao = document.getElementById("div-pontuacao")

restart.style.display = 'none'
//--------------------------------------- GERADOR DE NUMEROS --------------------------------\\
function RandomNumbers(){
  for (var i = 0; i < calc_Fase; i++) {
    var aleatorio = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    numeros.push(aleatorio)
  }
  // EVITA REPETIÇÕES
  let converteString = numeros.toString()
  let Tira_Virg = converteString.replace(/,/g, "")
  let repete_UM = Tira_Virg.replace(/111/g, 113)
  let repete_DOIS = repete_UM.replace(/222/g, 221)
  let repete_TRES = repete_DOIS.replace(/333/g, 332)
  let converteVETOR = repete_TRES.split("")
  return converteVETOR
}

var intervalo =''
//--------------------------------------- INICIA AÇÃO --------------------------------\\
function inicio(){
  restart.style.display = 'block'
  start.style.display = 'none'

  intervalo = setInterval(selecionaBTN, 1000)
  selecionaBTN()

}

var numerosRand = RandomNumbers()
var percorre = 0
var intervalo2 = ''
//--------------------------------------- SELECIONA BOTÕES QUE SERÃO ACESSOS --------------------------------\\
function selecionaBTN(){
  console.log('vetor: '+numerosRand)
  var conteudoVETOR = numerosRand[percorre++]

    if(conteudoVETOR == 1){
      acendeBTN_vermelho()
      console.log('vermelho')
    }
    if(conteudoVETOR == 2){
      acendeBTN_verde()
      console.log('verde')
    }
    if(conteudoVETOR == 3){
      acendeBTN_amarelo()
      console.log('amarelo')
    }
    if(percorre > numerosRand.length){
      console.log('ACABOU!!!')

      clearInterval(intervalo)
    }
    
}
//--------------------------------------- ANIMAÇÃO PARA ACENDER BOTÕES --------------------------------\\
function acendeBTN_vermelho(){
  amarelo.style.background = 'rgb(0, 0, 0)'
  verde.style.background = 'rgb(0, 0, 0)'
  vermelho.style.background = 'red'
  
  intervalo2 = setTimeout(apagaTUDO, 700)
}

function acendeBTN_verde(){
  amarelo.style.background = 'rgb(0, 0, 0)'
  verde.style.background = 'green'
  vermelho.style.background = 'rgb(0, 0, 0)'

  intervalo2 = setTimeout(apagaTUDO, 700)
}

function acendeBTN_amarelo(){
  amarelo.style.background = 'yellow'
  verde.style.background = 'rgb(0, 0, 0)'
  vermelho.style.background = 'rgb(0, 0, 0)'

  intervalo2 = setTimeout(apagaTUDO, 700)
}


//--------------------------------------- AÇÃO PARA BOTÃO PISCAR --------------------------------\\
function apagaTUDO(){
  amarelo.style.background = 'rgb(0, 0, 0)'
  verde.style.background = 'rgb(0, 0, 0)'
  vermelho.style.background = 'rgb(0, 0, 0)'
}

let armaBTN_user = []
let pontos = 0
//--------------------------------------- INTERAÇÃO USUÁRIO E BOTÕES --------------------------------\\

document.addEventListener("keyup", function(e){
  if(e.key === "ArrowDown"){
    interaVERDE(2)
  }
  else if(e.key === "ArrowLeft"){
    interaAMARELO(3)
  }
  else if(e.key === "ArrowRight"){
    interaVERMELHO(1)
  }
})

function interaAMARELO(a){
  armaBTN_user.push(a)
  console.log('Vetor Interação: '+armaBTN_user)

  amarelo.style.background = 'yellow'
  verde.style.background = 'rgb(0, 0, 0)'
  vermelho.style.background = 'rgb(0, 0, 0)'

  intervalo2 = setTimeout(apagaTUDO, 100)

  compara()
}

function interaVERDE(v){
  armaBTN_user.push(v)
  console.log('Vetor Interação: '+armaBTN_user)

  amarelo.style.background = 'rgb(0, 0, 0)'
  verde.style.background = 'green'
  vermelho.style.background = 'rgb(0, 0, 0)'

  intervalo2 = setTimeout(apagaTUDO, 100)
  
  compara()
}

function interaVERMELHO(verm){
  armaBTN_user.push(verm)
  console.log('Vetor Interação: '+armaBTN_user)

  amarelo.style.background = 'rgb(0, 0, 0)'
  verde.style.background = 'rgb(0, 0, 0)'
  vermelho.style.background = 'red'
  
  intervalo2 = setTimeout(apagaTUDO, 100)

  compara()
}

//--------------------------------------- LIGAÇÃO ENTRE FINAL DA ANIMAÇÃO E INTERAÇÃO DO USUÁRIO --------------------------------\\
function interacao(){
  interaVERMELHO(verm)
  interaVERDE(v)
  interaAMARELO(a)
}

//--------------------------------------- COMPARAÇÃO --------------------------------\\
let acumula_ERROS = []
function compara(){

  if (armaBTN_user.length == numerosRand.length) {
    for (var n = 0; n < numerosRand.length; n++) {

      if(armaBTN_user[n] == numerosRand[n]){
        pontos = pontos + 25
        acumula_ERROS.push('acerto')
      }
      else{
        acumula_ERROS.push('erro')
      }

    }

  }
  let indice = 0
  if (acumula_ERROS.length == numerosRand.length) {
      for(mostra of acumula_ERROS){
          if(mostra == 'erro'){
            alert('FALHOU: pontuação máxima obtida: '+pontos)
            throw new Error('ERRO!!!')
          }
          else{
            indice++
          }
      }
      if(acumula_ERROS.length == indice){
        POS_comparacao()
      }
  }

}

//--------------------------------------- RESULTADO --------------------------------\\
function POS_comparacao(){
  fase = fase + 1
  console.log('fase: '+fase)
  alert('pontos: '+pontos)

  RandomNumbers()
  inicio()
}
