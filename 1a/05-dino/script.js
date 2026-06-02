let dinoEscolhido = ''
let dinoSorteado = ''
let total = 0

function testar(){

    let n = parseInt(Math.random()*10)
    console.log(n);

    dinoSorteado = converterParaDinossauro(n)
    console.log(dinoSorteado);
    
    
}

function escolherDino(n){
    let aposta = Number(document.getElementById('inputAposta').value)
    total += aposta

    console.log(aposta);
    console.log(total);
    

    dinoEscolhido = n
    dinoSorteado = parseInt(Math.random()*10)

    if(dinoEscolhido == dinoSorteado){
        alert('Ganhou!!')
    }

    document.getElementById('outDinoEscolhido').innerHTML = converterParaDinossauro(dinoEscolhido)
    document.getElementById('outDinoSorteado').innerHTML = converterParaDinossauro(dinoSorteado)


    console.log(dinoEscolhido);
    console.log(dinoSorteado);

    console.log(converterParaDinossauro(dinoEscolhido));
    console.log(converterParaDinossauro(dinoSorteado));
    
    
}

function converterParaDinossauro(n){
    let dino = ''
    if(n == 0){
        dino = 'Espinossauro'
    }else if(n == 1){
        dino = 'T-Rex'
    }else if(n == 2){
        dino = 'Braquiossauro'
    }else if(n == 3){
        dino = 'Velocirraptor'
    }else if(n == 4){
        dino = 'Estegossauro'
    }else if(n == 5){
        dino = 'Tricerátopo'
    }else if(n == 6){
        dino = 'Anquilossauro'
    }else if(n == 7){
        dino = 'Parassaurolofo'
    }else if(n == 8){
        dino = 'Alossauro'
    }else if(n == 9){
        dino = 'Carnotauro'
    }

    return dino
    // console.log(dino);
    
}
