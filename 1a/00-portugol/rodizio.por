programa {
  funcao inicio() {
    inteiro placa
    escreva("Digite o último número da placa: ")
    leia(placa)
    se(placa == 0 ou placa == 1){
      escreva("Não pode na segunda")
    }senao se(placa == 2 ou placa == 3){
      escreva("Não pode na terça")
    }senao se(placa == 4 ou placa == 5){
      escreva("Não pode na quarta")
    }senao se(placa == 6 ou placa == 7){
      escreva("Não pode na quinta")
    }senao se(placa == 8 ou placa == 9){
      escreva("Não pode na sexta")
    }
  }
}
