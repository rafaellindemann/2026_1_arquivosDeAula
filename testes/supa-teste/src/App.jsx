import { useEffect, useState } from 'react'
import './App.css'
import { supabase } from './lib/supabase'

function App() {
  const [categorias, setCategorias] = useState([])
  const [nomeCategoria, setNomeCategoria] = useState('')
  const [idEmEdicao, setIdEmEdicao] = useState(null)
  const [nomeEdicao, setNomeEdicao] = useState('')

  async function receberCategorias() {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('id', { ascending: true })

    if (error) {
      console.error('Erro ao buscar categorias:', error)
      return
    }

    setCategorias(data)
  }

  async function inserirCategoria() {
    const nomeLimpo = nomeCategoria.trim()

    if (!nomeLimpo) return

    const { error } = await supabase
      .from('categories')
      .insert({ name: nomeLimpo })

    if (error) {
      console.error('Erro ao inserir categoria:', error)
      return
    }

    setNomeCategoria('')
    receberCategorias()
  }

  function iniciarEdicao(categoria) {
    setIdEmEdicao(categoria.id)
    setNomeEdicao(categoria.name)
  }

  function cancelarEdicao() {
    setIdEmEdicao(null)
    setNomeEdicao('')
  }

  async function salvarEdicao(id) {
    const nomeLimpo = nomeEdicao.trim()

    if (!nomeLimpo) return

    const { error } = await supabase
      .from('categories')
      .update({ name: nomeLimpo })
      .eq('id', id)

    if (error) {
      console.error('Erro ao atualizar categoria:', error)
      return
    }

    cancelarEdicao()
    receberCategorias()
  }

  async function excluirCategoria(id) {
    const confirmou = window.confirm('Deseja excluir esta categoria?')

    if (!confirmou) return

    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Erro ao excluir categoria:', error)
      return
    }

    if (idEmEdicao == id) {
      cancelarEdicao()
    }

    receberCategorias()
  }

  useEffect(() => {
    receberCategorias()
  }, [])

  return (
    <>
      <h1>Categorias</h1>

      <div style={{ marginBottom: '16px' }}>
        <input
          type="text"
          value={nomeCategoria}
          onChange={(e) => setNomeCategoria(e.target.value)}
          placeholder="Nome da categoria"
        />
        <button onClick={inserirCategoria}>Inserir</button>
      </div>

      <hr />

      {categorias.length == 0 && <p>Nenhuma categoria cadastrada.</p>}

      {categorias.map((categoria) => (
        <div
          key={categoria.id}
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          {idEmEdicao == categoria.id ? (
            <>
              <input
                type="text"
                value={nomeEdicao}
                onChange={(e) => setNomeEdicao(e.target.value)}
              />
              <button onClick={() => salvarEdicao(categoria.id)}>Salvar</button>
              <button onClick={cancelarEdicao}>Cancelar</button>
            </>
          ) : (
            <>
              <span>
                {categoria.id} - {categoria.name}
              </span>
              <button onClick={() => iniciarEdicao(categoria)}>Editar</button>
              <button onClick={() => excluirCategoria(categoria.id)}>
                Excluir
              </button>
            </>
          )}
        </div>
      ))}
    </>
  )
}

export default App


// import { useEffect, useState } from 'react'
// import './App.css'
// import { supabase } from './lib/supabase'

// function App() {
//   const [categorias, setCategorias] = useState([])
//     const [nomeCategoria, setNomeCategoria] = useState('')

//   async function inserirCategoria() {
//     const { data, error } = await supabase
//       .from('categories')
//       .insert({ name: nomeCategoria })
//       .select()

//     if (error) {
//       console.error('Erro ao inserir categoria:', error)
//       return
//     }

//     console.log('Categoria inserida:', data)
//     setNomeCategoria('')
//   }

//   async function receberCategorias() {
//     const { data, error } = await supabase.from('categories').select('*')

//     if (error) {
//       console.error('Erro ao buscar categorias:', error)
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
//       <h1>Categorias</h1>
//       {categorias.map((categoria) => (
//         <p key={categoria.id}>{categoria.name}</p>
//       ))}


//       <hr />
//       <input
//         type="text"
//         value={nomeCategoria}
//         onChange={(e) => setNomeCategoria(e.target.value)}
//         placeholder="Nome da categoria"
//       />
//       <button onClick={inserirCategoria}>Inserir</button>
//     </>
//   )
// }

// export default App


