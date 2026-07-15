
// C >> Create  >> Cadastrar
// R   >> Read   >> Ler
// U   >>  Update  >> alterar/atualizar/editar/fuçar/mudar
// D   >>  Delete  >> Apagar/deletar/excluir

// ctrl + ;

// const nomes = []
// const alturas = []




// console.log(dino);

let dinos = []

function cadastrarDino() {
    const novoDino = {
        id: Date.now(),
        nome: document.getElementById('input-nome').value,
        altura: Number(document.getElementById("input-altura").value),
        cor: document.getElementById("input-cor").value,
        custo: Number(document.getElementById("input-custo").value),
    }
    dinos.push(novoDino)

    console.log(dinos);

    limparFormulario()
}

function limparFormulario() {
    document.getElementById('input-nome').value = ''
    document.getElementById('input-altura').value = ''
    document.getElementById('input-cor').value = ''
    document.getElementById('input-custo').value = ''

    document.getElementById('input-nome').focus()
}

function mostrarTodos(){

    for(let i=0; i<dinos.length; i++){
        // alert(dinos[i].nome)
        document.getElementById('painel-dinos').innerHTML += 
        `<p class="card-dino">${dinos[i].nome}</p>`
        
    }
}


function testar() {
    dinos = [
        {
            id: 1718324500001,
            nome: "Tiranossauro Rex",
            altura: 6.1,
            cor: "#8B4513", // Marrom
            custo: 150000
        },
        {
            id: 1718324500002,
            nome: "Velociraptor",
            altura: 2.0,
            cor: "#2E8B57", // Verde escuro
            custo: 85000
        },
        {
            id: 1718324500003,
            nome: "Tricerátops",
            altura: 3.0,
            cor: "#708090", // Cinza
            custo: 120000
        },
        {
            id: 1718324500004,
            nome: "Braquiossauro",
            altura: 13.0,
            cor: "#556B2F", // Verde oliva
            custo: 250000
        },
        {
            id: 1718324500005,
            nome: "Pterodáctilo",
            altura: 1.5,
            cor: "#4682B4", // Azul aço
            custo: 95000
        }
    ]

    console.log(dinos);

}