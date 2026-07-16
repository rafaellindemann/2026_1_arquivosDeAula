function fugir(){
    alert("Esta é a funcao fugir")
    // alert('2')
    // esta parte do cod
    window.location.href = 'teste.html'
    
}

function navegar(){
    let resposta = confirm('Quer mesmo ir pra lá?')
    
    //    alert(resposta)
    
    if(resposta == true){
        window.location.href = 'teste.html'
    }
}

function validarSenha(){
    let senha = prompt("Digite a senha")
    if(senha == 1235){
        alert("Senha correta!")
        window.location.href = 'teste.html'
    }else{
        if(senha != null){
            alert("Tentativa de invasão detectada")
        }
    }


    // alert(senha)
}