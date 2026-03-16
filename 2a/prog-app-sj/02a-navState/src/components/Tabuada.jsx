import { useState} from 'react'

function Tabuada() {
    const[resultado, setResultado] = useState('')
    function lerNumero(){
        let n = Number(prompt("Digite o número:"))
        let linhas = ''
        let linha
        for(let i=1; i<=10; i++){
            // let linha = i + 'x' + 
            let mult = i*n
            linha = `${i}x${n}=${mult} || ` 
            linhas += linha
            // console.log(linha);
        }
        setResultado(linhas)
    }

    return (
        <div style={{backgroundColor:'red'}}>
            <h2>Tabuada</h2>
            {/* <button>Mais um</button> */}
            <button onClick={lerNumero}>Informar número</button>
            {resultado && <p>Resultado: {resultado}</p>}

            
            
        </div>
    )
}

export default Tabuada
