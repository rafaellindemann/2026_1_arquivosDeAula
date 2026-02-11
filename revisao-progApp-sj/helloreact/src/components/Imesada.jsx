import React, { useState } from 'react'
import './Imesada.css'


function Imesada() {
    const [saldo, setSaldo] = useState(0);
    const [inputValor, setInputValor] = useState('');
    const [inputDescricao, setInputDescricao] = useState('');
    const [movimentacoes, setMovimentacoes] = useState([
        {tipo: 'crédito', valor: 10, id: Date.now(), descricao: 'Agiotagem'},
        {tipo: 'débito', valor: 5, id: Date.now()+1, descricao: 'Figurinhas'},
    ])

    function movimentar(t){
        if(inputValor == '' || inputDescricao == '' ){
            alert("Na, na , na")
        }else{
            if(t == 'crédito'){
                setSaldo(saldo + Number(inputValor))
            }else{
                setSaldo(saldo - Number(inputValor))
            }
            setMovimentacoes([...movimentacoes, 
                {tipo: t, valor: inputValor, id: Date.now(), descricao: inputDescricao},])
            setInputValor('')
            setInputDescricao('')
        }
    }

    // function creditar(){
    //     setSaldo(saldo + Number(inputValor))
    //     setMovimentacoes([...movimentacoes, 
    //         {tipo: 'crédito', valor: inputValor, id: Date.now(), descricao: inputDescricao},])
    //     setInputValor('')
    //     setInputDescricao('')
    // }
    // function debitar(){
    //     setSaldo(saldo - Number(inputValor))
    //     setInputValor('')
    // }

    function atualizarValor(e){
        setInputValor(e.target.value)
    }

    return (
        <div className={"container-imesada"}>
            <div className="form-imesada">
                <img src="./imgs/porco.png" alt="" className="imagem-porco"  />
                <h2>iMesada</h2>
                <p>Controlinho financeiro</p>
                <p>💰Saldo: R${saldo}💸</p>
                <input type="text"
                    value={inputDescricao}
                    onChange={(e) => setInputDescricao(e.target.value)}
                />
                <input type="number"
                    value={inputValor}
                    onChange={atualizarValor}
                />
                {/* {inputValor} */}
                <div className="botoes">
                    <button onClick={() => movimentar('crédito')}>Creditar</button>
                    <button onClick={() => movimentar('débito')}>Debitar</button>
                    {/* <button onClick={creditar}>Creditar</button>
                    <button onClick={debitar}>Debitar</button> */}
                </div>
                <div className={"render-movimentacoes"}>
                    {movimentacoes.map( (m) => (
                        <div key={m.id} className={m.tipo}>
                            <label>{m.descricao}</label>
                            <label> || R${m.valor} || </label>
                            <label>{m.tipo}</label>
                        </div>
                    ) )}
                </div>
            </div>


            {/* <button onclick='tratar()'>lasjkhdf</button> */}

        </div>
    )
}

export default Imesada
