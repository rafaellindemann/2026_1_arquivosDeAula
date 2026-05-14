import React from 'react'
import './Compra.css'

function Compra({c}) {
    const {id, nome, preco, quantidade, valorTotal} = c
    return (
        <div className="cont-compra">
            <span>{nome}</span>
            <span>{quantidade}x</span>
            <span>R$ {preco.toFixed(2).replace('.',',')}</span>
            <strong>R$ {valorTotal.toFixed(2).replace('.',',')}</strong>
        </div>
    )
}

export default Compra
// { id: 600, nome: "Mouse Gamer RGB", preco: 15.50, quantidade: 2, valorTotal: 31.00 }