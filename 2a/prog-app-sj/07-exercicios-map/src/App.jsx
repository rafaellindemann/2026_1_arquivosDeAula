import { useState } from 'react'
import { FaHorse } from "react-icons/fa";

import './App.css'
import Compra from './components/Compra';

function App() {
  const [cavalos, setCavalos] = useState([
    {
      id: 11,
      nome: "Trovão",
      raca: "Mangalarga Marchador",
      idade: 5,
      pelagem: "Tordilho"
    },
    {
      id: 12,
      nome: "Pérola",
      raca: "Quarto de Milha",
      idade: 4,
      pelagem: "Alazã"
    },
    {
      id: 13,
      nome: "Espírito",
      raca: "Mustang",
      idade: 7,
      pelagem: "Baio"
    },
    {
      id: 14,
      nome: "Apolo",
      raca: "Puro Sangue Inglês",
      idade: 6,
      pelagem: "Castanho"
    },
    {
      id: 15,
      nome: "Luna",
      raca: "Appaloosa",
      idade: 3,
      pelagem: "Sardenta"
    },
    {
      id: 16,
      nome: "Barão",
      raca: "Crioulo",
      idade: 10,
      pelagem: "Zaino"
    },
    {
      id: 17,
      nome: "Zéfiro",
      raca: "Lusitano",
      idade: 8,
      pelagem: "Branco"
    },
    {
      id: 18,
      nome: "Fagulha",
      raca: "Árabe",
      idade: 5,
      pelagem: "Preto"
    },
    {
      id: 19,
      nome: "Diamante",
      raca: "Andaluz",
      idade: 9,
      pelagem: "Cinza"
    },
    {
      id: 20,
      nome: "Cigana",
      raca: "Campolina",
      idade: 4,
      pelagem: "Pampa"
    }
  ])

  const [carros, setCarros] = useState([
    {
      id: 1,
      modelo: "Fusca 1300",
      marca: "Volkswagen",
      ano: 1974,
      cor: "Azul Pastel",
      quilometragem: 45000
    },
    {
      id: 2,
      modelo: "Mustang Fastback",
      marca: "Ford",
      ano: 1967,
      cor: "Preto",
      quilometragem: 12000
    },
    {
      id: 3,
      modelo: "Opala Diplomata",
      marca: "Chevrolet",
      ano: 1988,
      cor: "Cinza Metálico",
      quilometragem: 82000
    },
    {
      id: 4,
      modelo: "DeLorean DMC-12",
      marca: "DeLorean",
      ano: 1981,
      cor: "Aço Escovado",
      quilometragem: 5000
    },
    {
      id: 5,
      modelo: "F-40",
      marca: "Ferrari",
      ano: 1987,
      cor: "Vermelho Corsa",
      quilometragem: 2500
    },
    {
      id: 6,
      modelo: "Maverick GT",
      marca: "Ford",
      ano: 1975,
      cor: "Laranja",
      quilometragem: 67000
    },
    {
      id: 7,
      modelo: "911 Carrera",
      marca: "Porsche",
      ano: 1993,
      cor: "Branco",
      quilometragem: 31000
    },
    {
      id: 8,
      modelo: "Kombi Corujinha",
      marca: "Volkswagen",
      ano: 1962,
      cor: "Saia e Blusa (Vermelho/Branco)",
      quilometragem: 95000
    },
    {
      id: 9,
      modelo: "Charger RT",
      marca: "Dodge",
      ano: 1971,
      cor: "Amarelo",
      quilometragem: 54000
    },
    {
      id: 10,
      modelo: "Shelby Cobra",
      marca: "AC Cars",
      ano: 1965,
      cor: "Azul com Faixas Brancas",
      quilometragem: 1800
    }
  ])

  const [dino, setDinos] = useState([
    {
      id: 101,
      nome: 'Tyrannosaurus rex',
      família: 'Tyrannosauridae',
      peso: '8 toneladas',
      altura: '4 metros',
      comprimento: '12 metros',
      períodoHistórico: 'Cretáceo Superior'
    },
    {
      id: 102,
      nome: 'Stegosaurus',
      família: 'Stegosauridae',
      peso: '5 toneladas',
      altura: '2.5 metros',
      comprimento: '9 metros',
      períodoHistórico: 'Jurássico Superior'
    },
    {
      id: 103,
      nome: 'Triceratops',
      família: 'Ceratopsidae',
      peso: '6 toneladas',
      altura: '3 metros',
      comprimento: '9 metros',
      períodoHistórico: 'Cretáceo Superior'
    },
    {
      id: 104,
      nome: 'Velociraptor',
      família: 'Dromaeosauridae',
      peso: '150 kg',
      altura: '1.8 metros',
      comprimento: '2 metros',
      períodoHistórico: 'Cretáceo Superior'
    },
    {
      id: 105,
      nome: 'Brachiosaurus',
      família: 'Brachiosauridae',
      peso: '50 toneladas',
      altura: '15 metros',
      comprimento: '25 metros',
      períodoHistórico: 'Jurássico Superior'
    },
    {
      id: 106,
      nome: 'Ankylosaurus',
      família: 'Ankylosauridae',
      peso: '6 toneladas',
      altura: '2.5 metros',
      comprimento: '9 metros',
      períodoHistórico: 'Cretáceo Superior'
    },
    {
      id: 107,
      nome: 'Diplodocus',
      família: 'Diplodocidae',
      peso: '12 toneladas',
      altura: '6 metros',
      comprimento: '27 metros',
      períodoHistórico: 'Jurássico Superior'
    },
    {
      id: 108,
      nome: 'Pteranodon',
      família: 'Pteranodontidae',
      peso: '90 kg',
      altura: '1.8 metros (asas)',
      comprimento: '7 metros',
      períodoHistórico: 'Cretáceo Superior'
    },
    {
      id: 109,
      nome: 'Spinosaurus',
      família: 'Spinosauridae',
      peso: '10 toneladas',
      altura: '4 metros',
      comprimento: '15 metros',
      períodoHistórico: 'Cretáceo Superior'
    },
    {
      id: 110,
      nome: 'Allosaurus',
      família: 'Allosauridae',
      peso: '2 toneladas',
      altura: '3 metros',
      comprimento: '9 metros',
      períodoHistórico: 'Jurássico Superior'
    },
    {
      id: 111,
      nome: 'Iguanodon',
      família: 'Iguanodontidae',
      peso: '3 toneladas',
      altura: '4 metros',
      comprimento: '10 metros',
      períodoHistórico: 'Cretáceo Inferior'
    },
    {
      id: 112,
      nome: 'Carcharodontosaurus',
      família: 'Carcharodontosauridae',
      peso: '7 toneladas',
      altura: '3.5 metros',
      comprimento: '13 metros',
      períodoHistórico: 'Cretáceo Superior'
    },
    {
      id: 113,
      nome: 'Parasaurolophus',
      família: 'Hadrosauridae',
      peso: '3.5 toneladas',
      altura: '4 metros',
      comprimento: '10 metros',
      períodoHistórico: 'Cretáceo Superior'
    },
    {
      id: 114,
      nome: 'Therizinosaurus',
      família: 'Therizinosauridae',
      peso: '5 toneladas',
      altura: '5 metros',
      comprimento: '10 metros',
      períodoHistórico: 'Cretáceo Superior'
    },
    {
      id: 115,
      nome: 'Archaeopteryx',
      família: 'Archaeopterygidae',
      peso: '1 kg',
      altura: '0.5 metros',
      comprimento: '0.5 metros',
      períodoHistórico: 'Jurássico Superior'
    },
    {
      id: 116,
      nome: 'Ceratosaurus',
      família: 'Ceratosauridae',
      peso: '1 tonelada',
      altura: '3 metros',
      comprimento: '7 metros',
      períodoHistórico: 'Jurássico Superior'
    },
    {
      id: 117,
      nome: 'Deinonychus',
      família: 'Dromaeosauridae',
      peso: '100 kg',
      altura: '1.5 metros',
      comprimento: '2.5 metros',
      períodoHistórico: 'Cretáceo Inferior'
    },
    {
      id: 118,
      nome: 'Dilophosaurus',
      família: 'Dilophosauridae',
      peso: '500 kg',
      altura: '2 metros',
      comprimento: '6 metros',
      períodoHistórico: 'Jurássico Inferior'
    },
    {
      id: 119,
      nome: 'Iguanodon',
      família: 'Iguanodontidae',
      peso: '3 toneladas',
      altura: '4 metros',
      comprimento: '10 metros',
      períodoHistórico: 'Cretáceo Inferior'
    },
    {
      id: 120,
      nome: 'Pachycephalosaurus',
      família: 'Pachycephalosauridae',
      peso: '500 kg',
      altura: '2 metros',
      comprimento: '4 metros',
      períodoHistórico: 'Cretáceo Superior'
    }
  ])

  const [pokemonhos, setPokemonhos] = useState([
    { id: 200, nome: "Misdreavus", imagem: "https://img.pokemondb.net/sprites/home/normal/misdreavus.png" },
    { id: 201, nome: "Unown", imagem: "https://img.pokemondb.net/sprites/home/normal/unown.png" },
    { id: 202, nome: "Wobbuffet", imagem: "https://img.pokemondb.net/sprites/home/normal/wobbuffet.png" },
    { id: 203, nome: "Girafarig", imagem: "https://img.pokemondb.net/sprites/home/normal/girafarig.png" },
    { id: 204, nome: "Pineco", imagem: "https://img.pokemondb.net/sprites/home/normal/pineco.png" },
    { id: 205, nome: "Forretress", imagem: "https://img.pokemondb.net/sprites/home/normal/forretress.png" },
    { id: 206, nome: "Dunsparce", imagem: "https://img.pokemondb.net/sprites/home/normal/dunsparce.png" },
    { id: 207, nome: "Gligar", imagem: "https://img.pokemondb.net/sprites/home/normal/gligar.png" },
    { id: 208, nome: "Steelix", imagem: "https://img.pokemondb.net/sprites/home/normal/steelix.png" },
    { id: 209, nome: "Snubbull", imagem: "https://img.pokemondb.net/sprites/home/normal/snubbull.png" }
  ])

  const [viagens, setViagens] = useState([
    { id: 300, origem: "São Paulo", destino: "Tóquio", tempo: "24h", model: "Boeing 777", custo: 6500.00 },
    { id: 301, origem: "Rio de Janeiro", destino: "Paris", tempo: "11h", model: "Airbus A350", custo: 4200.00 },
    { id: 302, origem: "Curitiba", destino: "Buenos Aires", tempo: "2h", model: "Embraer 195", custo: 1200.00 },
    { id: 303, origem: "Salvador", destino: "Lisboa", tempo: "9h", model: "Airbus A330neo", custo: 3800.00 },
    { id: 304, origem: "Belo Horizonte", destino: "Nova York", tempo: "10h", model: "Boeing 787", custo: 4900.00 },
    { id: 305, origem: "Florianópolis", destino: "Montevidéu", tempo: "1h45", model: "Boeing 737", custo: 950.00 },
    { id: 306, origem: "Manaus", destino: "Miami", tempo: "5h30", model: "Airbus A321", custo: 2100.00 },
    { id: 307, origem: "Brasília", destino: "Londres", tempo: "12h", model: "Boeing 777", custo: 5100.00 },
    { id: 308, origem: "Recife", destino: "Madri", tempo: "8h", model: "Airbus A340", custo: 3600.00 },
    { id: 309, origem: "Porto Alegre", destino: "Santiago", tempo: "3h", model: "Airbus A320", custo: 1100.00 }
  ])

  const [notas, setNotas] = useState([
    { id: 400, materia: "Cálculo I", nota: 4.5, desculpa: "O professor usou letras onde deveriam estar números." },
    { id: 401, materia: "História", nota: 9.0, desculpa: null },
    { id: 402, materia: "Física", nota: 3.0, desculpa: "A gravidade não colaborou no dia da prova prática." },
    { id: 403, materia: "Literatura", nota: 8.5, desculpa: null },
    { id: 404, materia: "Química", nota: 5.5, desculpa: "Inalei muito hélio e esqueci a tabela periódica." },
    { id: 405, materia: "Geografia", nota: 7.2, desculpa: null },
    { id: 406, materia: "Biologia", nota: 6.0, desculpa: "Fiquei com pena de dissecar o sapo e me desconcentrei." },
    { id: 407, materia: "Filosofia", nota: 10, desculpa: null },
    { id: 408, materia: "Inglês", nota: 4.0, desculpa: "O sotaque do áudio parecia um alienígena mastigando chiclete." },
    { id: 409, materia: "Artes", nota: 6.8, desculpa: "Minha visão artística está à frente do tempo do professor." }
  ])

  const [kpops, setKpops] = useState([
    {
      id: 500,
      nome: "BTS",
      integrantes: 7,
      empresa: "Big Hit (HYBE)",
      anoDebut: 2013,
      fandom: "ARMY"
    },
    {
      id: 501,
      nome: "Blackpink",
      integrantes: 4,
      empresa: "YG Entertainment",
      anoDebut: 2016,
      fandom: "BLINK"
    },
    {
      id: 502,
      nome: "Twice",
      integrantes: 9,
      empresa: "JYP Entertainment",
      anoDebut: 2015,
      fandom: "ONCE"
    },
    {
      id: 503,
      nome: "Stray Kids",
      integrantes: 8,
      empresa: "JYP Entertainment",
      anoDebut: 2018,
      fandom: "STAY"
    },
    {
      id: 504,
      nome: "NewJeans",
      integrantes: 5,
      empresa: "ADOR (HYBE)",
      anoDebut: 2022,
      fandom: "Bunnies"
    },
    {
      id: 505,
      nome: "EXO",
      integrantes: 9,
      empresa: "SM Entertainment",
      anoDebut: 2012,
      fandom: "EXO-L"
    },
    {
      id: 506,
      nome: "Red Velvet",
      integrantes: 5,
      empresa: "SM Entertainment",
      anoDebut: 2014,
      fandom: "ReVeluv"
    },
    {
      id: 507,
      nome: "Seventeen",
      integrantes: 13,
      empresa: "Pledis (HYBE)",
      anoDebut: 2015,
      fandom: "Carat"
    },
    {
      id: 508,
      nome: "IVE",
      integrantes: 6,
      empresa: "Starship Entertainment",
      anoDebut: 2021,
      fandom: "DIVE"
    },
    {
      id: 509,
      nome: "ATEEZ",
      integrantes: 8,
      empresa: "KQ Entertainment",
      anoDebut: 2018,
      fandom: "ATINY"
    }
  ])

  // esse é legal virar uma listinha estilo NF
  const [compras, setCompras] = useState([
    { id: 600, nome: "Mouse Gamer RGB", preco: 15.50, quantidade: 2, valorTotal: 31.00 },
    { id: 601, nome: "Café Espresso (Cápsula)", preco: 8.90, quantidade: 5, valorTotal: 44.50 },
    { id: 602, nome: "Teclado Mecânico", preco: 120.00, quantidade: 1, valorTotal: 120.00 },
    { id: 603, nome: "Camiseta Tech", preco: 45.00, quantidade: 3, valorTotal: 135.00 },
    { id: 604, nome: "Caneta Gel Preta", preco: 2.50, quantidade: 10, valorTotal: 25.00 },
    { id: 605, nome: "Suporte para Notebook", preco: 19.99, quantidade: 2, valorTotal: 39.98 },
    { id: 606, nome: "Monitor 24 Pol", preco: 350.00, quantidade: 1, valorTotal: 350.00 },
    { id: 607, nome: "Cabo HDMI 2m", preco: 12.00, quantidade: 4, valorTotal: 48.00 },
    { id: 608, nome: "Bloco de Notas", preco: 7.25, quantidade: 6, valorTotal: 43.50 },
    { id: 609, nome: "Headset com Microfone", preco: 89.90, quantidade: 2, valorTotal: 179.80 },
    { id: 610, nome: "Pilha Alcalina AAA", preco: 5.00, quantidade: 8, valorTotal: 40.00 },
    { id: 611, nome: "Mousepad Speed", preco: 27.30, quantidade: 3, valorTotal: 81.90 },
    { id: 612, nome: "Webcam Full HD", preco: 150.00, quantidade: 2, valorTotal: 300.00 }
  ]);

  
  // pra essa é legal cada tarefa ser uma linha
  const [tarefas, setTarefas] = useState([
    { id: 700, titulo: "Configurar ambiente", responsavel: "Ana Silva", concluido: true },
    { id: 701, titulo: "Modelagem do banco", responsavel: "Bruno Costa", concluido: false },
    { id: 702, titulo: "Desenvolver API login", responsavel: "Carla Souza", concluido: false },
    { id: 703, titulo: "Revisão de código", responsavel: "Daniel Oliveira", concluido: false },
    { id: 704, titulo: "Ajustar CSS global", responsavel: "Fernanda Lima", concluido: true },
    { id: 705, titulo: "Testes unitários", responsavel: "Gabriel Santos", concluido: false },
    { id: 706, titulo: "Deploy em staging", responsavel: "Ana Silva", concluido: true },
    { id: 707, titulo: "Documentar endpoints", responsavel: "Helena Matos", concluido: false },
    { id: 708, titulo: "Reunião de sprint", responsavel: "Igor Rocha", concluido: true },
    { id: 709, titulo: "Otimizar imagens", responsavel: "Juliana Mendes", concluido: false },
    { id: 710, titulo: "Refatorar hooks", responsavel: "Kevin Silva", concluido: true },
    { id: 711, titulo: "Corrigir bug de scroll", responsavel: "Larissa Faria", concluido: false },
    { id: 712, titulo: "Atualizar dependências", responsavel: "Marcos Paulo", concluido: true }
  ]);
  
  // layout de rede social. Provavelmente vai ser legal ter outro map para fazer as # no post
  const [posts, setPosts] = useState([
    { id: 800, emoji: "🚀", texto: "Partiu dominar o React!", hashtags: ["#coding", "#frontend"], curtidas: 45 },
    { id: 801, emoji: "☕", texto: "Café e código, a combinação perfeita.", hashtags: ["#devlife", "#coffee"], curtidas: 120 },
    { id: 802, emoji: "🌊", texto: "Aproveitando o dia na praia.", hashtags: ["#summer", "#vibe"], curtidas: 89 },
    { id: 803, emoji: "💡", texto: "Tive uma ideia incrível para um app hoje.", hashtags: ["#startup", "#ideas"], curtidas: 34 },
    { id: 804, emoji: "💻", texto: "Setup novo finalmente montado!", hashtags: ["#setup", "#gaming"], curtidas: 210 },
    { id: 805, emoji: "🍕", texto: "Sexta-feira pede uma pizza.", hashtags: ["#food", "#friday"], curtidas: 67 },
    { id: 806, emoji: "📚", texto: "Terminei de ler 'Código Limpo' hoje.", hashtags: ["#cleanclode", "#learning"], curtidas: 55 },
    { id: 807, emoji: "🏃‍♂️", texto: "Corrida matinal paga!", hashtags: ["#fitness", "#health"], curtidas: 42 },
    { id: 808, emoji: "🎨", texto: "Explorando novas paletas de cores.", hashtags: ["#design", "#uiux"], curtidas: 93 },
    { id: 809, emoji: "✈️", texto: "Próxima parada: conferência de tech.", hashtags: ["#travel", "#devconf"], curtidas: 156 },
    { id: 810, emoji: "🎸", texto: "Praticando um pouco de guitarra.", hashtags: ["#music", "#hobby"], curtidas: 28 },
    { id: 811, emoji: "🐶", texto: "O novo estagiário é muito fofo.", hashtags: ["#dog", "#officelife"], curtidas: 315 },
    { id: 812, emoji: "🌚", texto: "Codando no escuro até tarde.", hashtags: ["#nightowl", "#programming"], curtidas: 72 }
  ]);
  

  return (
    <>


      <section>
        <h2>Lista de Compras bem jóia</h2>
        <div className="lista-compras">
          {
            compras.map((compra) => (
              <Compra c={compra} key={compra.id}/>
            ))
          }
        </div>

        {/* {compras.map((compra) => (
            <div>
              <h2>{compra.nome}</h2>
            </div>
          ))} */}

        {/* <Compra c={compras[0]} /> */}
      </section>

      <section>
        {/* map de carros */}
      </section>

      <section>
        {/* map  de ... */}
      </section>

      <section>
        <h2>demo de imagens usando os pokemons </h2>
        {/* {pokemonhos.map((poke) => (
          <img src={poke.imagem} alt="" />
        ))} */}
      </section>

      <FaHorse />
      <FaHorse
        color="#8b4513" // Aceita nomes, HEX, RGB, etc.
        size="3rem"     // Aceita strings (px, em, rem) ou números (que viram px)
      />
      <FaHorse
        color="#000000" // Aceita nomes, HEX, RGB, etc.
        size="3rem"     // Aceita strings (px, em, rem) ou números (que viram px)
      />
      <FaHorse
        color="#ffffff" // Aceita nomes, HEX, RGB, etc.
        size="3rem"     // Aceita strings (px, em, rem) ou números (que viram px)
      />
      <FaHorse
        color="#21138b" // Aceita nomes, HEX, RGB, etc.
        size="3rem"     // Aceita strings (px, em, rem) ou números (que viram px)
      />

    </>
  )
}

export default App
