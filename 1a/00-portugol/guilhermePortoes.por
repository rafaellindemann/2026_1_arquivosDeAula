programa {
  funcao inicio() {
    // criar variáveis
    inteiro clt, estagiarios, pj, total
    // ler valores de entrada
    escreva("Quantidade de CLTs: ")
    leia(clt)

    escreva("Quantidade de estagiários: ")
    leia(estagiarios)

    escreva("Quantidade de PJs: ")
    leia(pj)
    // processar / calcular
    total = clt + estagiarios + pj
    // mostrar os resultados 
    escreva("----------------\n")   
    escreva("Total de devs: " + total)
  }
}
