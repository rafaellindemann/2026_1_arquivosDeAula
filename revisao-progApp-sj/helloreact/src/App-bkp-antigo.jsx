
import './App.css'
import Cabecalho from './components/Cabecalho';

import Imesada from './components/Imesada';
import { useState } from 'react';

function App() {
  const [cont, setCont] = useState(0)
  const [inputPreco, setInputPreco] = useState('')
  const [dobro, setDobro] = useState('')
  // const estado = useState()
  

  function tratarTeste(){
    // console.log("Passou aqui...");
    // console.log(estado);
    setCont(cont + 1)
    
    console.log(cont);
    
  }

  function calcularDobro(){
    let valor = Number(inputPreco)
    setDobro(valor*2)
  }

  return (
    <>
      <Imesada />
      <Cabecalho />
      <h1>Hello React</h1>
      <p>Parágrafo no App</p>
      
      
      <input type="text" 
        value={inputPreco}  
        onChange={(e) => setInputPreco(e.target.value)}
      />

      {/* {inputPreco} */}
      <button onClick={tratarTeste}>Teste</button>
      {cont}
      <div className="resultado">
        <button onClick={calcularDobro}>Dobrar</button>
        Dobro do número: {dobro}
      </div>

    </>
  )
}

export default App
