let pontosA = 0
let pontosB = 0

function aumentarPontosA(){
    pontosA++
    document.getElementById('placarA').innerHTML = pontosA
}
function diminuirPontosA(){
    pontosA--
    document.getElementById('placarA').innerHTML = pontosA
}
function aumentarPontosB(){
    pontosB++
    document.getElementById('placarB').innerHTML = pontosB
}
function diminuirPontosB(){
    pontosB--
    document.getElementById('placarB').innerHTML = pontosB
}
