import './App.css'
import DiaDaSemana from './components/DiaDaSemana';
import Paridade from './components/Paridade';
import Notas from './components/Notas';
import Voto from './components/Voto';
import Feira from './components/Feira';
function App() {

  return (
    <>
      <h1>01-componentes</h1>
      <Feira />
      <Voto />
      <Notas />
      <Paridade />
      <DiaDaSemana />
    </>
  )
}

export default App
