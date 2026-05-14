let cont = 0

function incrementar(){
    cont = cont + 1
    document.getElementById('contador').innerHTML = cont

    let historico = 'incremento'
    console.log(historico);
    
}
function decrementar(){
    cont = cont - 1
    document.getElementById('contador').innerHTML = cont
    
    console.log(historico);
}


let totalVendido = 0
function registrarVenda(){
    let venda = Number(prompt('Valor da venda:'))
    totalVendido = totalVendido + venda

    document.getElementById('saidaVendas').innerHTML = 'Total vendido hoje: R$' + totalVendido.toFixed(2)
    document.getElementById('listaVendas').innerHTML += 'R$' + venda.toFixed(2) + ' >> Total: R$' + totalVendido.toFixed(2) + '<br>'

}