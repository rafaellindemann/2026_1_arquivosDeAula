import './App.css'
import CardProduto from './components/CardProduto';
function App() {
  const produtos = [
    {id: 0, nome: 'Kichute', preco: 333, imagem: '👠'},
    {id: 1, nome: 'Monareta', preco: 654, imagem: '🚴'},
    {id: 2, nome: 'Tamagotchi', preco: 22, imagem: '🦕'}
  ]
  return (
    <div>
      <h1>Cards de coisas</h1>
      {
        produtos.map((produto) => (
          <CardProduto p={produto} />
        ))
      }
    </div>
  )
}

export default App
