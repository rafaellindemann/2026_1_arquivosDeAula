programa {
  funcao inicio() {
    // informações / variáveis
    real precoPorQuilo = 10
    real precoPorGrama = precoPorQuilo / 1000
    real peso
    real precoTotal
    // leitura de dados
    escreva("Digite o peso (g): ")
    leia(peso)
    // processamentos
    precoTotal = peso * precoPorGrama
    // saídas
    escreva("Valor a pagar: R$" + precoTotal)
  }
}
