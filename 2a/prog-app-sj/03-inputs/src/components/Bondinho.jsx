import {useState} from 'react'

function Bondinho() {
    const[alunos, setAlunos]=useState('')
    const[monitores, setMonitores]=useState('')
    function calcular(){
        if(alunos>=1 && alunos<=50 && monitores>=1 && monitores<=50){
            // calcula a bagaça
            // e mostra o resultado
            alert("dados bons, na volta eu calculo")
        }else{
            alert('Dados inválidos')
        }
    }
    return (
        <div>
            <div>
                Alunos<input type="number"
                    value={alunos}
                    onChange={(e)=>setAlunos(e.target.value)}
                />
            </div>
            <div>
                Monitores<input type="number"
                    value={monitores}
                    onChange={(e)=>setMonitores(e.target.value)}
                />
            </div>
            <button onClick={calcular}>Calcular</button>
        </div>
    )
}

export default Bondinho
