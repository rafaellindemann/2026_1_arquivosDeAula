import {useState} from 'react'

function Teste() {
    const[inputTeste, setInputTeste] = useState('')
    const[cont, setCont] = useState(0)
    function incrementar(){
        setCont(cont+1)
    }

    function somar(valor){
        setCont(cont+valor)
    }
    function somarEntrada(){
        setCont(cont+Number(inputTeste))
    }
    return (
        <div>
            <h2>Só pra testes avacalhadores mesmo</h2>
            Cont: {cont}

            <button onClick={incrementar}>+</button>
            <button onClick={() => setCont(cont+1)}>+</button>

            <button onClick={() => somar(10)}>Somar 10</button>
            <button onClick={() => somar(44)}>Somar 44</button>

            <input type="text"
                value={inputTeste}
                onChange={(e) => setInputTeste(e.target.value)}
            /> 
            <button onClick={somarEntrada}>Soma entrada</button>
        </div>
    )
}

export default Teste
