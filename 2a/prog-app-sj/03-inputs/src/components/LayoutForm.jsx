import React from 'react'
import './LayoutForm.css'

function LayoutForm() {
    return (
        <div>
            <h2>Exemplo login</h2>
            <div className="input-container">
                <label htmlFor="">Nome</label>
                <input type="text"/>
            </div>
            <div className="input-container">
                <label htmlFor="">Senha</label>
                <input type="text"/>
            </div>

            <button>Logar</button>

            <hr/>
            <label htmlFor="">Nome</label>
            <input type="text"/>
            <label htmlFor="">Senha</label>
            <input type="text"/>
            <button>Logar</button>

        </div>
    )
}

export default LayoutForm
