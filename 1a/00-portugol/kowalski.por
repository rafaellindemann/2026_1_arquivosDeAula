programa {
  funcao inicio() {
    // criar as variaveis
    inteiro qtdRelatoriosPF, qtdRelatoriosPJ
    inteiro tempoRelatoriosPF, tempoRelatoriosPJ
    real valorTotalPF, valorTotalPJ

    inteiro qtdTotal, tempoTotal
    real valorTotal
    real mediaValorPF, mediaValorPJ
    real mediaTempoPF, mediaTempoPJ

    // leitura dos dados
    escreva("Quantidade de relatórios PF: ")
    leia(qtdRelatoriosPF)
    escreva("Quantidade de relatórios PJ: ")
    leia(qtdRelatoriosPJ)
    escreva("Tempo gasto nos relatórios PF(horas): ")
    leia(tempoRelatoriosPF)
    escreva("Tempo gasto nos relatórios PJ(horas): ")
    leia(tempoRelatoriosPJ)
    escreva("Valor total dos relatórios PF: R$")
    leia(valorTotalPF)
    escreva("Valor total dos relatórios PJ: R$")
    leia(valorTotalPJ)

    // processar/calcular
    qtdTotal = qtdRelatoriosPF + qtdRelatoriosPJ
    tempoTotal = tempoRelatoriosPF + tempoRelatoriosPJ
    valorTotal = valorTotalPF + valorTotalPJ
    mediaValorPF = valorTotalPF / qtdRelatoriosPF
    mediaValorPJ = valorTotalPJ / qtdRelatoriosPJ
    mediaTempoPF = tempoRelatoriosPF / qtdRelatoriosPF
    mediaTempoPJ = tempoRelatoriosPJ / qtdRelatoriosPJ

    // apresentar os dados 
    escreva("Quantidade total (PF+PJ): " + qtdTotal)
    escreva("\nTempo total (PF+PJ, em horas): " + tempoTotal)
    escreva("\nValor total (PF+PJ): R$" + valorTotal)
    escreva("\nMédia de valor por rel. PF: R$" + mediaValorPF)
    escreva("\nMédia de valor por rel. PJ: R$" + mediaValorPJ)
    escreva("\nMédia tempo por rel. PF (horas): " + mediaTempoPF)
    escreva("\nMédia tempo por rel. PJ (horas): " + mediaTempoPJ)





  }
}
