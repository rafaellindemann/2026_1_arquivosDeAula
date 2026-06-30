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


let times = ["Al Moçar", "Apend City", "Ah Tá Anta", "Atlético Maneiro", "Baile de Munique", "Barcelusa", "Bar Sem Lona", "Chelsicha", "CR Flamingo", "Cuiabayern", "Falso Madrid", "Horriver Plate", "Inter de Limão", "Jumentus", "Lazionados", "Malfica", "Meia Boca Junior", "Paysanduba", "Real Madruga", "Real Matismo"]

let produtos = [""]

const nomes = [
  "Lúcio Fernando",
  "Rivaldo Jesus",
  "Mônica",
  "Capitão Ganso",
  "Peba",
  "Gill Bates",
  "Dona Bete",
  "Kowalski",
  "Heitor Tuga",
  "Junin",
  "Padre Ernan Buco",
  "GENéZio",
  "Bilu",
  "Waldisney",
  "Tião"
];