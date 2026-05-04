programa {
  funcao inicio() {
    inteiro caminhoes
    real lucroPorCaminhao, lucroTotal
    lucroPorCaminhao = (90*50) - 450
    //escreva(lucroPorCaminhao)
    escreva("Quantos caminhões: ")
    leia(caminhoes)
    lucroTotal = lucroPorCaminhao * caminhoes
    escreva("Lucro da temporada: " + lucroTotal)
  }
}
