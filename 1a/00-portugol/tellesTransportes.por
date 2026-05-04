programa {
  funcao inicio() {
    real peso = 20, volume = 1
    inteiro distancia = 650
    real frete

    frete = 15+(2*peso)+(0.05*distancia)+(10*volume)
    escreva("\nValor do frete(1): R$" + frete)
    // escreva("Valor do frete: R$" + 15+(2*peso)+(0.05*distancia)+(10*volume))


    // caso 3
        peso = 3
        volume = 0.2
        distancia = 1200
    frete = 15+(2*peso)+(0.05*distancia)+(10*volume)
    escreva("Valor do frete(3): R$" + frete)
  }
}
