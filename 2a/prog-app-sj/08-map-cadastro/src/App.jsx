import { useState } from 'react'
import './App.css'
import Contatinho from './components/Contatinho'

function App() {
  const[contatinhos, setContatinhos] = useState([])
  const[inputFoto, setInputFoto] = useState('')
  const[inputNome, setInputNome] = useState('')
  const[inputArroba, setInputArroba] = useState('')
  const[inputFone, setInputFone] = useState('')

  function cadastrarContatinho(){
    const novoContatinho = {
      id: Date.now(), // ***
      foto: inputFoto,
      nome: inputNome,
      arroba: inputArroba,
      fone: inputFone
    }
    setContatinhos([novoContatinho, ...contatinhos])
    setInputFoto('')
    setInputNome('')
    setInputArroba('')
    setInputFone('')
  }

  function excluir(id){ // ***
    setContatinhos(contatinhos.filter((c)=>c.id != id))
  }

  // numeros = [1,2,3,4,99]
  // outrosNumeros = [14, numeros]
  // outrosNumeros = [14, [1,2,3,4,99]]
  // maisOutros = [55, [14, [1,2,3,4,99]]]
  
  // outrosNumeros = [14, ...numeros]
  // outrosNumeros = [14, 1,2,3,4,99]

  return (
    <div className="cont-app">
      <div className="form-cadastro">
        <p>Cadastro de contatinhos</p>
        <div className="cont-input">
          <label>Foto</label>
          <input type="text" 
            value={inputFoto}
            onChange={(e) => setInputFoto(e.target.value)}
          />
        </div>

        <div className="cont-input">
          <label>Nome</label>
          <input type="text" 
            value={inputNome}
            onChange={(e) => setInputNome(e.target.value)}
          />
        </div>

        <div className="cont-input">
          <label>@</label>
          <input type="text" 
            value={inputArroba}
            onChange={(e) => setInputArroba(e.target.value)}
          />
        </div>
        <div className="cont-input">
          <label>Fone</label>
          <input type="text" 
            value={inputFone}
            onChange={(e) => setInputFone(e.target.value)}
          />
        </div>
        <button onClick={cadastrarContatinho}>Cadastrar Contatinho S2</button>
      </div>

      <div className="listaContatinhos">
        {contatinhos.map((contatinho) => (
          <Contatinho key={contatinho.id} c={contatinho} excluir={excluir} />
        ))}
      </div>
    </div>
  )
}

export default App


          // <input type="text" 
          //   value={inputFoto}
          //   // onChange={(e) => setInputFoto(e.target.value)}
          //   onChange={(e) => {  
          //     setInputFoto(e.target.value);     
          //     console.log(e)}}
          // />