import {useState} from 'react'

function PumLinhas() {
    const[resultado, setResultado]=useState([])
    const[inputN, setInputN]=useState('')
    function gerarPum(){
        let texto = ''
        let pums = 0
        let i=1
        let elementos = []
        while(pums<inputN){
            if(i%4 != 0){
                texto += i + ' '
            }else{
                texto += 'PUM '
                pums++
                elementos.push(texto)
                texto = ''
            }
            i++
        }
        setResultado(elementos)
    }
    return (
        <div>
            <input type="number"
                value={inputN}
                onChange={(e)=>setInputN(e.target.value)}
            />
            <button onClick={gerarPum}>Pum</button>
            {resultado.map((linha, index)=>(
                <p key={index}>{linha}</p>
            ))}
        </div>
    )
}
export default PumLinhas

