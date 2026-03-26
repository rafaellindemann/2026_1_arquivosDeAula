import {useState} from 'react'

function Teste() {
    const[inputTeste, setInputTeste] = useState('')
    const[cont, setCont] = useState(0)
    const[usuario, setUsuario] = useState('')
    
    // criando um useState sem desestruturação
    // ⚠️⚠️ Não faça isso se um dia alguém já amou você
    const teste = useState(0)
    const estado = teste[0]
    const setEstado = teste[1]

    function efetuarLogin(){
        let login = prompt("Digite o nome de usuário")
        let senha = prompt("Digite a senha. Confia, é seguro...")

        alert("Login efetuado com (quase) sucesso")
        setUsuario(login)

    }
    
    function testar(){
        console.log(teste);
        console.log(estado);
        console.log(setEstado);

        setEstado(estado + 1)
        
        
    }
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
            <button onClick={testar}>testador</button>
            <div>
                {/* { condição ? renderizadoSeVerdadeiro : renderizadoSeFalso} */}
                { usuario ? 
                <p>Olá {usuario}</p> : 
                <p>Faz o login aí</p> }

                {usuario != '' && <p>Tem um usuário logado</p>}

                <button onClick={efetuarLogin}>Logar</button>
            </div>
            <h2>Só pra testes avacalhadores mesmo</h2>
            Cont: {cont}

            <button onClick={incrementar}>+</button>
            <button onClick={() => setCont(cont+1)}>+</button>

            <button onClick={() => somar(10)}>Somar 10</button>
            <button onClick={() => somar(44)}>Somar 44</button>

            <input type="number"
                value={inputTeste}
                onChange={(e) => setInputTeste(e.target.value)}
            /> 
            <button onClick={somarEntrada}>Soma entrada</button>
        </div>
    )
}

export default Teste
