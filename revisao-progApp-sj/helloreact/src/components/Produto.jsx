import React from 'react'

function Produto(props) {
    return (
        <div style={{backgroundColor:'#ffaaaa', color: '#fff'}}>
            <p>Produto: {props.p.nome}</p>
            <p>Preço: {props.p.preco}</p>
            <p>Descrição: {props.p.descricao}</p>
        </div>
    )
}

export default Produto
