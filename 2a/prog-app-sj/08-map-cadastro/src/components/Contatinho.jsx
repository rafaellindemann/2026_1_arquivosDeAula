import { useState } from 'react'
import './Contatinho.css'

function Contatinho({c, excluir}) { //*** */
    // console.log(c);
    const {foto, nome, arroba, fone, id } = c //*** */
    const[editando, setEditando] = useState(false)

    const[inputNome, setInputNome] = useState(nome)
    
  return (
    <div className='cont-contatinho'>
        { editando ? 
          <div>
            <h2>Nome: <input type="text" value={inputNome} 
              onChange={(e) => setInputNome(e.target.value)}
              />
            </h2>
            
            <p>{foto}</p>
            {/* <img src={foto} alt={foto} style={{width: '200px'}} /> */}
            <img src={foto} alt={foto} className='foto-perfil' />
            <input type="text" value={arroba}/>
            <p>{fone}</p>
            <button onClick={salvarContatinho}>Salvar</button>
            {/* <select name="" id="">
              <option value="" selected></option>
            </select> */}
            {/* isto é ciência */}

          </div>
         : 
          <div>
            <h2>Nome: {nome}</h2>
            <p>Foto: {foto}</p>
            {/* <img src={foto} alt={foto} style={{width: '200px'}} /> */}
            <img src={foto} alt={foto} className='foto-perfil' />
            <p>@{arroba}</p>
            <p>Fone: {fone}</p>
            <button onClick={() => setEditando(true)}>Editar</button>
          </div>
         }

        <button onClick={() => excluir(id)}>Excluir</button>
    </div>
  )
}

export default Contatinho