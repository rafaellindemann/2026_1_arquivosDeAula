import {useState} from 'react'

function Render() {
    const[idade, setIdade] = useState(22)

    // idade = 18
    // setIdade(18)
    return (
        <div>
            {idade>=18 ? <p>Maior</p> : <p>Menor</p>}
        </div>
    )
}

export default Render
