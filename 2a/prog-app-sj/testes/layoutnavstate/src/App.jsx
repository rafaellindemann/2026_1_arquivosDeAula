import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Contato from './pages/Contato'


function App() {
  const [tela, setTela] = useState(<Home />)
  return (
    <div className="container-app">
      <header className='cont-header'>
        <h1>Navegação Pirata ☠️🦜🏴‍☠️</h1>
        <nav>
          <button onClick={() => setTela(<Home />)}>Home</button>
          <button onClick={() => setTela(<Produtos />)}>Produtos</button>
          <button onClick={() => setTela(<Contato />)}>Contato</button>
        </nav>
      </header>
      <main className='cont-main'>
        {/* {tela === 0 && <Home />} */}
        {tela}
      </main>
    </div>
  )
}

export default App


