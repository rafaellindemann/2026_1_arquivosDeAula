let resposta = document.getElementById('resultado')

function mostrarDiaDaSemana(){
    // infos
    let numero, dia
    // leitura
    numero = Number(prompt("Digita o número: "))
    // processamento
    if(numero == 1){
        dia = "Domingo"
    }else if(numero == 2){
        dia = "Segunda"
    }else if(numero == 3){
        dia = "Terça"
    }else if(numero == 4){
        dia = "Quarta"
    }else if(numero == 5){
        dia = "Quinta"
    }else if(numero == 6){
        dia = "Sexta"
    }else if(numero == 7){
        dia = "Sábado"
    }else{
        dia = "Erro #404, dia não encontrado."
    }
    // saídas
    document.getElementById('resultado').innerHTML = 'Dia escolhido: ' + dia

}

function adivinharNumero(){
    // let numero = Math.round(Math.random()*10)// 0..10
    // let numero = Math.floor(Math.random()*10) // 0..9
    let numero = Math.ceil(Math.random()*3) // 1..10
    // let numero = Math.random()
    // console.log(numero);
    // numero = numero * 10
    // console.log(numero);
    // numero = Math.ceil(numero)
    // console.log(numero);

    let chute = Number(prompt("Chuta aí:"))
    if(chute == numero){
        resposta.innerHTML = "Acertou!"
    }else{
        resposta.innerHTML = "ERROU!"
    }
}

function verificarIdade(){
    // infos
    let idade
    // entradas
    idade = Number(prompt("Digite sua idade:"))
    // processamentos
    // saídas
    if(idade >= 18){
        resposta.innerHTML = "Você é maior de idade"
    }else{
        resposta.innerHTML = "Você é menor de idade"
    }
}

function verificarProvisoes(){
    // infos
    let marujos, comida
    let comidaPorMarujo
    // entradas
    marujos = Number(prompt("Quantidade de marujos:"))
    comida = Number(prompt("Quilos de comida:"))
    // processamentos
    comidaPorMarujo = comida / marujos
    // saidas
    if(marujos >= 10 && comidaPorMarujo >= 1.5){ // ||
        document.getElementById('resultado').innerHTML = "<br>Provisões suficientes. <br>Rumo ao horizonte!"
    }else{
        document.getElementById('resultado').innerHTML = "<br>Algo está errado. <br>Posseidom não quer ninguém no mar hoje."
    }
    
}


function calcularChances(){
    // alert("Aqui vou calcular as chances das criancinhas...")

    document.getElementById("resultado").innerHTML = "Resultado das chances..."
}

function calcularPrecoBrique(){
    // INFOS
    let precoCompra, precoVenda
    // LEITURAS 
    precoCompra = Number(prompt("Preço de compra:"))
    // PROCESSAMENTO
    precoVenda = precoCompra * 3
    // SAIDAS
    // console.log("Preço para venda: R$" + precoVenda.toFixed(2));
    // alert("Preço para venda: R$" + precoVenda.toFixed(2));

    document.getElementById("resultado").innerHTML = "Preço para venda: R$" + precoVenda.toFixed(2)
}