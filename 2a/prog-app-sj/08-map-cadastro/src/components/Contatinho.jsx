import './Contatinho.css'

function Contatinho({c, excluir}) { //*** */
    // console.log(c);
    const {foto, nome, arroba, fone, id } = c //*** */
    
  return (
    <div className='cont-contatinho'>
        <h2>{nome}</h2>
        <p>{foto}</p>
        <img src={foto} alt={foto} style={{width: '200px'}} />
        <p>{arroba}</p>
        <p>{fone}</p>
        <button onClick={() => excluir(id)}>Excluir</button>//*** */
    </div>
  )
}

export default Contatinho