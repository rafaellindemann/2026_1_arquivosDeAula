let pontosA = 0
let pontosB = 0

function aumentarPontosA(){
    pontosA++
    document.getElementById("placarA").innerHTML = pontosA
    if(pontosA == 5){
        alert("Time A venceu!")
    }
}
function diminuirPontosA(){
    pontosA--
    document.getElementById("placarA").innerHTML = pontosA
}
function aumentarPontosB(){
    pontosB++
    document.getElementById("placarB").innerHTML = pontosB
    if(pontosB == 5){
        alert("Time B venceu!")
    }
}
function diminuirPontosB(){
    pontosB--
    document.getElementById("placarB").innerHTML = pontosB
}

