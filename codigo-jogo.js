let fase = 1
let numeros = []
let filtro = []
let amarelo = document.getElementById("amarelo")
let verde = document.getElementById("verde")
let vermelho = document.getElementById("vermelho")
let start = document.getElementById("start")
let restart = document.getElementById("restart")
let continuar = document.getElementById("continuar")
let puntuacao = document.getElementById("div-pontuacao")

restart.style.display = 'none'
continuar.style.display = 'none'

var intervalo =''

//--------------------------------------- INICIA AÇÃO --------------------------------\\
function inicio(){
  if(fase <= 1){
    restart.style.display = 'block'
    start.style.display = 'none'
  }
  restart.style.display = 'block'
  intervalo = setInterval(selecionaBTN, 1000)

  numeros.length = 0
}

var numerosRand = [1]
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

var interval_CARREGAMENTO = ''
var tempo_Anima_pontos = 25

function POS_comparacao(){
fase++
if(pontos >= 0 && pontos < 10){
  interval_CARREGAMENTO = setInterval(umDIGITO, tempo_Anima_pontos)
  umDIGITO()
}
if(pontos >= 10 && pontos < 100){
  interval_CARREGAMENTO = setInterval(doisDIGITO, tempo_Anima_pontos)
  doisDIGITO()
}
if(pontos >= 100 && pontos < 1000){
  interval_CARREGAMENTO = setInterval(tresDIGITO, tempo_Anima_pontos)
  tresDIGITO()
}
if(pontos > 1000){
  interval_CARREGAMENTO = setInterval(quatroDIGITO, tempo_Anima_pontos)
  quatroDIGITO()
}
}

var acumulaPonto = 0

function umDIGITO(){
acumulaPonto++

if(acumulaPonto >= 0 && acumulaPonto < 10){
document.getElementById("div-pontuacao").innerHTML = "000"+acumulaPonto
}
if(acumulaPonto >= 10 && acumulaPonto < 100){
document.getElementById("div-pontuacao").innerHTML = "00"+acumulaPonto
}
if(acumulaPonto >= 100 && acumulaPonto < 1000){
document.getElementById("div-pontuacao").innerHTML = "0"+acumulaPonto
}
if(acumulaPonto > 1000){
document.getElementById("div-pontuacao").innerHTML = acumulaPonto
}
else if(acumulaPonto === pontos){
clearInterval(interval_CARREGAMENTO)
document.getElementById("num_Ponto").innerHTML = fase+"ª"

inter_fase()
}
}

function doisDIGITO(){
acumulaPonto++

if(acumulaPonto >= 0 && acumulaPonto < 10){
document.getElementById("div-pontuacao").innerHTML = "000"+acumulaPonto
}
if(acumulaPonto >= 10 && acumulaPonto < 100){
document.getElementById("div-pontuacao").innerHTML = "00"+acumulaPonto
}
if(acumulaPonto >= 100 && acumulaPonto < 1000){
document.getElementById("div-pontuacao").innerHTML = "0"+acumulaPonto
}
if(acumulaPonto > 1000){
document.getElementById("div-pontuacao").innerHTML = acumulaPonto
}
else if(acumulaPonto === pontos){
clearInterval(interval_CARREGAMENTO)
document.getElementById("num_Ponto").innerHTML = fase+"ª"

inter_fase()
}
}

function tresDIGITO(){
acumulaPonto++

if(acumulaPonto >= 0 && acumulaPonto < 10){
document.getElementById("div-pontuacao").innerHTML = "000"+acumulaPonto
}
if(acumulaPonto >= 10 && acumulaPonto < 100){
document.getElementById("div-pontuacao").innerHTML = "00"+acumulaPonto
}
if(acumulaPonto >= 100 && acumulaPonto < 1000){
document.getElementById("div-pontuacao").innerHTML = "0"+acumulaPonto
}
if(acumulaPonto > 1000){
document.getElementById("div-pontuacao").innerHTML = acumulaPonto
}
else if(acumulaPonto === pontos){
clearInterval(interval_CARREGAMENTO)
document.getElementById("num_Ponto").innerHTML = fase+"ª"

inter_fase()
}
}

function quatroDIGITO(){
acumulaPonto++
if(acumulaPonto >= 0 && acumulaPonto < 10){
document.getElementById("div-pontuacao").innerHTML = "000"+acumulaPonto
}
if(acumulaPonto >= 10 && acumulaPonto < 100){
document.getElementById("div-pontuacao").innerHTML = "00"+acumulaPonto
}
if(acumulaPonto >= 100 && acumulaPonto < 1000){
document.getElementById("div-pontuacao").innerHTML = "0"+acumulaPonto
}
if(acumulaPonto > 1000){
document.getElementById("div-pontuacao").innerHTML = acumulaPonto
}
else if(acumulaPonto === pontos){
clearInterval(interval_CARREGAMENTO)
document.getElementById("num_Ponto").innerHTML = fase+"ª"
inter_fase()
}
}


var intervalo_FASE = ''

var seg = 6
function inter_fase(){
  if(seg === -1){
    seg = 6
  }
  intervalo_FASE = setInterval(carregaFase, 1000)
  carregaFase()
  
}

var Mensagem_Carrega = document.getElementById("mensagem-CARREGA")

function carregaFase(){
  console.log("valor segundos: "+seg)

  seg--

  if(seg >= 0){
    Mensagem_Carrega.style.display = "block"
    restart.style.display = 'block'
    Mensagem_Carrega.innerHTML = "ATENÇÃO: iniciando fase "+fase+" em "+seg+" segundos"
  }
  else{
    clearInterval(intervalo_FASE)
    Mensagem_Carrega.style.display = "none"
    restart.style.display = 'none'
    continuar.style.display = 'block'
    
  }

}


function continua(){
  
  restart.style.display = 'block'
  continuar.style.display = 'none'
  
  numerosRand.length = 0
  armaBTN_user.length = 0
  acumula_ERROS.length = 0
  percorre = 0
  seg + 6
  console.log('vetor interação botão: '+armaBTN_user)
  console.log('vetor numeros aleatorios: '+numerosRand)
  RandomNumbers()
}


function RandomNumbers(){
  calc_Fase = fase * 2
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
  //return converteVETOR
  numerosRand = converteVETOR
  console.log('vetor para acender luz: '+numerosRand)
  inicio()
}