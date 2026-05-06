import {useState} from 'react'
import './App.css'
import CardProduto from './components/CardProduto';
function App() {
  const [produtos, setProdutos] = useState([
    {id: 0, nome: 'Kichute', preco: 333, imagem: '👠'},
    {id: 1, nome: 'Monareta', preco: 654, imagem: '🚴'},
    {id: 2, nome: 'Tamagotchi', preco: 22, imagem: '🦕'},
    {id: 3, nome: 'Genius', preco: 100, imagem: '🛸'},
  ])
  
  const[inputImagem, setInputImagem] = useState('')
  const[inputNome, setInputNome] = useState('')
  const[inputPreco, setInputPreco] = useState('')

  function cadastrar(){
    let produtoNovo = {id: Date.now(), nome: 'Pogobol', preco: 10, imagem: '🪐'}
    setProdutos([produtoNovo, ...produtos])
  }

  return (
    <div>
      <h1>Cards de coisas</h1>
      <div className="cont-form">
      <h2>Cadastro de coisas</h2>
        <div className="input-container">
          <label htmlFor="">Imagem</label>
          <input type="text"
            value={inputImagem}
            onChange={(e) => setInputImagem(e.target.value)}
            />
        </div>
        <div className="input-container">
          <label htmlFor="">Nome</label>
          <input type="text"
            value={inputNome}
            onChange={(e) => setInputNome(e.target.value)}
            />
        </div>
        <div className="input-container">
          <label htmlFor="">Preço</label>
          <input type="text"
            value={inputPreco}
            onChange={(e) => setInputPreco(e.target.value)}
          />
        </div>

        <button onClick={cadastrar}>Cadastrar</button>
      </div>
      <div className="listaCards">
        {
          produtos.map((produto) => (
            <CardProduto p={produto} key={produto.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default App
