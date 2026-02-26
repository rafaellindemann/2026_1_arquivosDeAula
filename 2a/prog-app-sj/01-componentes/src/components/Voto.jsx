function Voto() {

    function processarIdade(){
        let idade = Number(prompt("Idade:"))
        if(idade < 16){
            alert("Não pode votar")
        }else if(idade == 16 || idade == 17 || idade > 65){
            alert("Voto facultativo")
        }else if(idade >= 18 && idade <= 65){
            alert("Voto obrigatório")
        }
    }
    return (
        <div className={"voto-container"}>
            <h2>Idade para votar</h2>
            <button onClick={processarIdade}>Processar idade</button>
        </div>
    )
}

export default Voto
