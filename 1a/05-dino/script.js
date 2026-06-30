let dinoEscolhido = ''
let dinoSorteado = ''
let total = 0

function testar(){

    let n = parseInt(Math.random()*10)
    console.log(n);

    dinoSorteado = converterParaDinossauro(n)
    console.log(dinoSorteado);
    
    
}

function mostrarLucro(){
    let senha = prompt("Digite a senha:")
    if(senha == '0171'){
        alert('Total: R$' + total)
    }else{
        alert('Intruso, vou quebrar suas pernas...')
    }
}

function escolherDino(n){
    let aposta = Number(document.getElementById('inputAposta').value)
    total += aposta

    let limitePremio = total * 0.2

    console.log(aposta);
    console.log(total);
    

    dinoEscolhido = n
    dinoSorteado = parseInt(Math.random()*1)

    if(dinoEscolhido == dinoSorteado){
        let premio = aposta * 2
        if(premio < limitePremio){
            alert('Ganhou: R$' + premio)
            total -= premio
        }else{
            alert("Erro#404. Para abrir um chamado clique neste >> LINK <<.")
        }
    }else{
        alert('Perdeu')
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

    switch(n){
        case 0:
            dino = 'Espinossauro'
        break;
        case 0:
            dino = 'Espinossauro'
        break;
        case 0:
            dino = 'Espinossauro'
        break;
        case 0:
            dino = 'Espinossauro'
        break;
        case 0:
            dino = 'Espinossauro'
        break;
        case 0:
            dino = 'Espinossauro'
        break;
        case 0:
            dino = 'Espinossauro'
        break;
        case 0:
            dino = 'Espinossauro'
        break;
        case 0:
            dino = 'Espinossauro'
        break;
    }

    return dino
    // console.log(dino);
    
}
