function Feira() {
    function calcularMacas(){
        let preco
        let qtd = Number(prompt("Quantas maças?"))
        if(qtd < 12){
            preco = 0.3
        }else{
            preco = 0.25
        }

        let valor = qtd * preco
        alert("Valor: R$" + valor.toFixed(2))
    }
    return (
        <div>
            <h2>Feira da maçãs</h2>
            <button onClick={calcularMacas}>Maçãs</button>
        </div>
    )
}

export default Feira
