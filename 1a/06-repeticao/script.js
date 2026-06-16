
// let contador = 0 // inicializacao
// while(contador < 10){ // (cond repet)
//     alert("Contador: " + contador)
    
//     contador++ // contagem
// }// voltar e testar novamente


let peso

let contador = 0
while(contador < 10){
    peso = Number(prompt("Digite o peso:"))
    if(peso>1.1 || peso<0.9){
        alert("Fora tolerância do peso")
    }
    contador++
}
