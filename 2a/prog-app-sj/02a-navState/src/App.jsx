
import './App.css'
import Iconify from './components/Iconify';
import Tabuada from './components/Tabuada';
import Render from './components/Render';
import { useState } from 'react';


function App() {
  const[tela, setTela] = useState('')
  return (
    <>
      <nav>
        <button onClick={() => setTela(<Render />)}>Render</button>
        <button onClick={() => setTela(<Tabuada />)}>Tabuada</button>
        <button onClick={() => setTela(<Iconify />)}>Iconify</button>
      </nav>
      <h1>02a - Navegação pirata</h1>
      {tela}
      {/* <Render />
      <Tabuada />
      <Iconify /> */}
    </>
  )
}

export default App
