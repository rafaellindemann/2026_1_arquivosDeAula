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
        nome: "Tyrannosaurus rex",
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