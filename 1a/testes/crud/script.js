const dinos = []

function cadastrarDino(){
    let novoDino = {
        id: Date.now(),
        nome: document.getElementById('inputNome').value,
        peso: document.getElementById('inputPeso').value,
        altura: document.getElementById('inputAltura').value,
        periodo: document.getElementById('inputPeriodo').value,
    }
    dinos.push(novoDino)
    console.log(dinos);
    
}

function getByID(id){
    return document.getElementById(id)
}

function pesquisar(){
    let nome = getByID('inputNome').value

    for(let i=0; i<dinos.length; i++){
        if(dinos[i].nome == nome){
            getByID('inputPeso').value =  dinos[i].peso
            getByID('inputAltura').value = dinos[i].altura
            getByID('inputPeriodo').value = dinos[i].periodo
            getByID('inputId').value = dinos[i].id
        }
    }

    console.log(nome);
    
}

function salvarDino(){
    let id = getByID('inputId').value

        for(let i=0; i<dinos.length; i++){
            if(dinos[i].id == id){
                dinos[i].nome = getByID('inputNome').value 
                dinos[i].peso = getByID('inputPeso').value 
                dinos[i].altura = getByID('inputAltura').value
                dinos[i].periodo = getByID('inputPeriodo').value
            }
        }
        mostrarTodos()
}

// <div class='card'>${dinos[i].nome}</div>

function mostrarTodos(){
    document.getElementById('painel').innerHTML = `<h2>Lista de dinos</h2>`
    for(let i=0; i<dinos.length; i++){
        document.getElementById('painel').innerHTML += `
            <div class="card">
                <p>${dinos[i].nome}</p>
                <p>${dinos[i].peso} kg</p>
                <p>${dinos[i].altura} m</p>
                <p>${dinos[i].periodo}</p>
            </div>
        `
    }
}

function inserirDinosDeTeste(){
    dinos.push(
    {
        id: 1,
        nome: "Rex",
        peso: 8000,
        altura: 4,
        periodo: "Cretáceo"
    },
    {
        id: 2,
        nome: "Triceratops",
        peso: 7000,
        altura: 3,
        periodo: "Cretáceo"
    },
    {
        id: 3,
        nome: "Velociraptor",
        peso: 15,
        altura: 0.6,
        periodo: "Cretáceo"
    },
    {
        id: 4,
        nome: "Brachiosaurus",
        peso: 50000,
        altura: 13,
        periodo: "Jurássico"
    },
    {
        id: 5,
        nome: "Stegosaurus",
        peso: 5000,
        altura: 4,
        periodo: "Jurássico"
    }
);

console.log(dinos);

}