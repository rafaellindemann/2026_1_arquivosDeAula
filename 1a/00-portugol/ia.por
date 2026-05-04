programa {
  funcao inicio() {
    // criar as variáveis
    inteiro tamanhoDoPrompt
    inteiro totalTokens
    real custoPorToken = 0.151, totalReais
    // ler as entradas
    escreva("Tamanho do prompt: ")
    leia(tamanhoDoPrompt)
    // processar
    totalTokens = tamanhoDoPrompt + 5
    totalReais = totalTokens * custoPorToken
    // mostrar resultados
    escreva("Total de tokens: " + totalTokens)
    escreva("\nValor: R$" + totalReais)
  }
}
