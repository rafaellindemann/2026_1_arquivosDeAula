

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

let idades = [22, 33, 32]


let produtos = ["Meia", "Pá de corte", "Suco de manga", "Leite"]
let precos = [665.9999, 777, 12, 4]

function verProdutosComPrecos(){
    // console.log(produtos);
    for(let i=0; i<produtos.length; i++){
        let j = i + 1
        document.getElementById('listaProdutos').innerHTML += 
        "<p>" + 
        j + "°: " + produtos[i] + " R$ " + 
        precos[i].toFixed(2).replace('.', ',') 
        + 
        "</p>"
    } 
}

function verProdutos(){
    // console.log(produtos);
    for(let i=0; i<produtos.length; i++){
        let j = i + 1
        document.getElementById('listaProdutos').innerHTML += 
        "<p>" + j + "°: " + produtos[i] + "</p>"
    } 
}