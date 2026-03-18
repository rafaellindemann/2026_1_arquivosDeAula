import {useState} from 'react'

function Pum() {
    const[resultado, setResultado]=useState()
    const[inputN, setInputN]=useState('')
    function gerarPum(){
        let texto = ''
        let pums = 0
        let i=1
        while(pums<inputN){
            if(i%4 != 0){
                texto += i + ' '
            }else{
                texto += 'PUM '
                pums++
            }
            i++
        }
        setResultado(texto)
    }
    return (
        <div>
            <input type="number"
                value={inputN}
                onChange={(e)=>setInputN(e.target.value)}
            />
            <button onClick={gerarPum}>Pum</button>
            {resultado}
        </div>
    )
}
export default Pum


// let i = 0
// while(i<10){
//     console.log(i);
//     i++
// }


// for(let i = 0;i<10; i++){
//     console.log(i);
// }