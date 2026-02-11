import React, { useState } from 'react'

function RenderCond() {
    const[valor, setValor] = useState(false)
    const[idade, setIdade] = useState(0)

    return (
        <div>
            <div>
                <h2>Render lógico</h2>
                <button onClick={() => setValor(false)}>F</button>
                <button onClick={() => setValor(true)}>V</button>
                {valor && <p>Aparece se for true</p> }
            </div>
            <hr/>
            <div>
                <h2>Render com teste</h2>
                <button onClick={() => setIdade(Number(prompt("Digite sua idade:")))}>Idade</button>
                <p>Idade atual: {idade}</p>
                {idade>=18 && <p>Maior de idade</p> }
            </div>
            <hr/>
            <div>
                <h2>Render com ternário</h2>
                <button onClick={() => setIdade(Number(prompt("Digite sua idade:")))}>Idade</button>
                <p>Idade atual: {idade}</p>
                {idade>=18 ? <p>Maior de idade</p> : <p>Menor de idade</p> }
            </div>
            
        </div>
    )
}

export default RenderCond
