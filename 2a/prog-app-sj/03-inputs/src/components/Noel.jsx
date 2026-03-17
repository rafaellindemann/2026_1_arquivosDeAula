import {useState} from 'react'

function Noel() {
    const[inputNum, setInputNum] = useState('')
    const[frase, setFrase] = useState('')
    function gerarFrase(){
        let texto = 'Ho '
        let n = Number(inputNum)
        for(let i=1; i<n; i++){
            texto += 'ho '
        }
        setFrase(texto)
    }
    return (
        <div>
            <h2>Papai Noel</h2>
            Número de hos:
            <input type="text"
                value={inputNum}
                onChange={(e)=>setInputNum(e.target.value)}
            />
            <button onClick={gerarFrase}>Gerar</button>
            {frase}
        </div>
    )
}

export default Noel
