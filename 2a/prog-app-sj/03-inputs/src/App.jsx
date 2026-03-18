import { useState } from 'react'
import './App.css'
import Evento from './components/Evento';
import Avisador from './components/Avisador';
import Teste from './components/Teste';
import LayoutForm from './components/LayoutForm';
import Temperaturas from './components/Temperaturas';
import Noel from './components/Noel';
import PapaiNoel from './components/PapaiNoel';
import Pum from './components/Pum';
import PumLinhas from './components/PumLinhas';

function App() {
  const[inputNome, setInputNome] = useState('')
  function cadastrar(){
    console.log("Cadastrando: " + inputNome);
  }
  return (
    <>
      <h1>Inputs controlados</h1>
      Nome <input type="text"
        value={inputNome}
        onChange={(e) => setInputNome(e.target.value) }
      />
      <button onClick={cadastrar}>Cadastrar</button>

      {/* <p>Nome digitado: {inputNome}</p> */}

      <hr/>
        <PumLinhas />
        <hr/>
        <Pum />
        <hr/>
        <PapaiNoel />
        <hr/>
        <Noel />
        <hr/>
        <Temperaturas />
        <hr/>
        <LayoutForm />
      <hr/>
        <Evento />
      <hr/>
        <Avisador />
      <hr/>
        <Teste />
      <hr/>
    </>
  )
}

export default App
