import {useState} from 'react'

function PapaiNoel() {
    const[inputNum, setInputNum] = useState('')
    const[frase, setFrase] = useState('')
    function gerarFrase(){
        let n = Number(inputNum)
        let texto = ''
        for(let i=0; i<n; i++){
            texto += 'ho '
        }
        setFrase(texto)
    }
    return (
        <div>
            <h2>Papai noel 2</h2>
            Número de Hos: <input type="text"
                value={inputNum}
                onChange={(e)=>setInputNum(e.target.value)}
            />
            <button onClick={gerarFrase}>Gerar Hos</button>
            <p>
                {frase}
            </p>
        </div>
    )
}

export default PapaiNoel
