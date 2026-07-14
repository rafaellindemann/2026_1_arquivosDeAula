let times = [
    "Al Moçar",
    "Apend City",
    "Ah Tá Anta",
    "Atlético Maneiro",
    "Baile de Munique",
    "Barcelusa",
    "Bar Sem Lona",
    "Chelsicha",
    "CR Flamingo",
    "Cuiabayern",
    "Falso Madrid",
    "Horriver Plate",
    "Inter de Limão",
    "Jumentus",
    "Lazionados",
    "Malfica",
    "Meia Boca Junior",
    "Paysanduba",
    "Real Madruga",
    "Real Matismo"
]


let escudos = [
    "al-moçar.jpg",
    "apend-city.jpg",
    "atahanta.jpg",
    "atletico-maneiro.jpg",
    "baile-de-munique.jpg",
    "barcelusa.jpg",
    "bar-sem-lona.jpg",
    "chelsicha.jpg",
    "cr-flamingo.jpg",
    "cuiabayern.jpg",
    "falso-madrid.jpg",
    "horriver-plate.jpg",
    "inter-de-limao.jpg",
    "jumentus.jpg",
    "lazionados.jpg",
    "malfica.jpg",
    "meia-boca-junior.jpg",
    "paysanduba.jpg",
    "real-madruga.jpg",
    "real-matismo.jpg"
]



function sortearJogo(){
    let n 
    n = Math.random()*times.length
    n = Math.floor(n)
    let time1 = times[n]
    times.splice(n, 1)

    console.log(time1);
    
    n = Math.random()*times.length
    n = Math.floor(n)
    let time2 = times[n]
    times.splice(n, 1)

    console.log(time2);

    document.getElementById('tabela').innerHTML += 
    `<p class='jogo'>${time1} x ${time2}</p>`
    

}

