import './DiaDaSemana.css'
function DiaDaSemana() {
    function verificarDia(){ // sq2-3
        // let dia = Number(prompt("Digite o dia da semana (1 a 7):"))
        let dia = prompt("Digite o dia da semana (1 a 7):")
        dia = Number(dia)

        // if(dia == 1){
        //     alert("Domingo")
        // }else if(dia == 2){
        //     alert("Segunda")
        // }else if(dia == 3){
        //     alert("Terça")
        // }else if(dia == 4){
        //     alert("Quarta")
        // }else if(dia == 5){
        //     alert("Quinta")
        // }else if(dia == 6){
        //     alert("Sexta")
        // }else if(dia == 7){
        //     alert("Sábado")
        // }else{
        //     alert("Esse dia não existe ou é carnaval")
        // }

        switch(dia){
            case 1: alert("Domingo")
                    alert("Eu gosto dos domingos")
                    break
            case 2: alert("Segunda")
                    break
            case 3: alert("Terça")
                    break
            case 4: alert("Quarta")
                    break
            case 5: alert("Quinta")
                    break
            case 6: alert("Sexta")
                    break
            case 7: alert("Sábado")
                    break
            default: alert("Esse dia não existe ou é carnaval")
        }
    }

    return (
        <div className={"container-dia"}>
            <h2>Dia da semana</h2>
            <button onClick={verificarDia}>Verificar dia</button>
        </div>
    )
}

export default DiaDaSemana
