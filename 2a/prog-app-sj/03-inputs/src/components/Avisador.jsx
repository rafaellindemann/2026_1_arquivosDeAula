import {useState} from 'react'

function Avisador() {
    const[mostrar, setMostrar] = useState(false)
    function alternar(){
        setMostrar(!mostrar)
    }
    function inverter(){
        if(mostrar == true){
            setMostrar(false)
        }else{
            setMostrar(true)
        }
    }
    return (
        <div>
            
            <button onClick={() => setMostrar(!mostrar)}>Mostrar</button>
            <button onClick={alternar}>Mostrar2</button>
            <button onClick={inverter}>Mostrar3</button>
            {mostrar && <p>Aviso importante, sua vida está em risco...</p>}
            
        </div>
    )
}

export default Avisador
