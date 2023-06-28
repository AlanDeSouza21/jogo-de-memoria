let fase = 13
let numeros = []
let filtro = []
let amarelo = document.getElementById("amarelo")
let verde = document.getElementById("verde")
let vermelho = document.getElementById("vermelho")
let start = document.getElementById("start")
let restart = document.getElementById("restart")
let puntuacao = document.getElementById("div-pontuacao")

restart.style.display = 'none'

function RandomNumbers(){
  for (var i = 0; i < fase; i++) {
    var aleatorio = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    numeros.push(aleatorio)
  }
  let converteString = numeros.toString()
  let Tira_Virg = converteString.replace(/,/g, "")
  let repete_UM = Tira_Virg.replace(/111/g, 113)
  let repete_DOIS = repete_UM.replace(/222/g, 221)
  let repete_TRES = repete_DOIS.replace(/333/g, 332)
  let converteVETOR = repete_TRES.split("")
  return converteVETOR
}

var intervalo =''

function inicio(){
  restart.style.display = 'block'
  start.style.display = 'none'

  intervalo = setInterval(selecionaBTN, 1000)
  selecionaBTN()

}

var numerosRand = RandomNumbers()
var percorre = 0
var intervalo2 = ''

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

function apagaTUDO(){
  amarelo.style.background = 'rgb(0, 0, 0)'
  verde.style.background = 'rgb(0, 0, 0)'
  vermelho.style.background = 'rgb(0, 0, 0)'
}

let armaBTN_user = []

function interaAMARELO(a){
  armaBTN_user.push(a)
  console.log('Vetor Interação: '+armaBTN_user)
}

function interaVERDE(v){
  armaBTN_user.push(v)
  console.log('Vetor Interação: '+armaBTN_user)
}

function interaVERMELHO(verm){
  armaBTN_user.push(verm)
  console.log('Vetor Interação: '+armaBTN_user)
}

function interacao(){
  var pontos = ''

  console.log('Vetor Interação: '+armaBTN_user)

}