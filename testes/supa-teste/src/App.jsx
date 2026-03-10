import { useEffect, useState } from 'react'
import './App.css'
import { supabase } from './lib/supabase'

function App() {
  const [categorias, setCategorias] = useState([])
    const [nomeCategoria, setNomeCategoria] = useState('')

  async function inserirCategoria() {
    const { data, error } = await supabase
      .from('categories')
      .insert({ name: nomeCategoria })
      .select()

    if (error) {
      console.error('Erro ao inserir categoria:', error)
      return
    }

    console.log('Categoria inserida:', data)
    setNomeCategoria('')
  }

  async function receberCategorias() {
    const { data, error } = await supabase.from('categories').select('*')

    if (error) {
      console.error('Erro ao buscar categorias:', error)
      return
    }

    setCategorias(data)
  }

  useEffect(() => {
    receberCategorias()
  }, [])

  useEffect(() => {
    console.log(categorias)
  }, [categorias])

  return (
    <>
      <h1>Categorias</h1>
      {categorias.map((categoria) => (
        <p key={categoria.id}>{categoria.name}</p>
      ))}


      <hr />
      <input
        type="text"
        value={nomeCategoria}
        onChange={(e) => setNomeCategoria(e.target.value)}
        placeholder="Nome da categoria"
      />
      <button onClick={inserirCategoria}>Inserir</button>
    </>
  )
}

export default App


// import { useEffect, useState } from 'react'
// import './App.css'

// import { supabase } from './lib/supabase'

// function App() {
//   const [categorias, setCategorias] = useState([])
  
//   async function receberCategorias() {
//     const { data, error } = await supabase.from('categories').select('*')
//     if (error) {
//       console.error(error)
//       return
//     }
//     setCategorias(data)
//   }
  


//   useEffect(() => {
//     receberCategorias()
//   }, [])

//   useEffect(() => {
//     console.log(categorias)
//   }, [categorias])

//   return (
//     <>

//     </>
//   )
// }

// export default App
