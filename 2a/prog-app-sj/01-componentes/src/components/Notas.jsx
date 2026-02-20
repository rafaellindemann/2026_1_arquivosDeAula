
function Notas() {

    function classificarNota(){
        let nota = Number(prompt("Digite a nota (0 a 100):"))
        // if(nota > 100 || nota < 0){
        //     alert("Deu ruim")
        // }else 
        if(nota > 80 && nota <= 100){
            alert("A")
        }else if(nota > 60){
            alert("B")
        }else if(nota > 40){
            alert("C")
        }else if(nota > 20){
            alert("D")
        }else if(nota > 0){
            alert("E")
        }
        else{
            alert("Deu ruim")
        }
    }
    return (
        <div>
            <h2>Classificação de notas - sq2-7</h2>
            <button onClick={classificarNota}>Classificar nota</button>
        </div>
    )
}

export default Notas
