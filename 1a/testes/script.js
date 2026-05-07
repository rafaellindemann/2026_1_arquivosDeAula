let numero
let chances

function iniciar(){
    chances = 5
    numero = Math.ceil(Math.random()*10)
}

function adivinhar(){
    if(chances > 0){
        let chute
    
        // numero = Math.ceil(Math.random()*10)
        chute = Number(prompt("Chuta aí:"))
        chances--
    
        if(chute == numero){
            document.getElementById("resultado").innerHTML = 'Acertou!!'
        }else{
            document.getElementById("resultado").innerHTML = 'Errou...<br>Restam ' + chances + ' chances'
        }
    
         console.log(chute + ', ' + numero);

    }else{
        alert("Acabaram suas chances!")
    }
    // let numero
     
}
// function adivinhar(){
//     // let numero
//     let chute

//     // numero = Math.ceil(Math.random()*10)
//     chute = Number(prompt("Chuta aí:"))

//     if(chute == numero){
//         document.getElementById("resultado").innerHTML = 'Acertou!!'
//     }else{
//         document.getElementById("resultado").innerHTML = 'Errou...'
//     }

//      console.log(chute + ', ' + numero);
     
// }