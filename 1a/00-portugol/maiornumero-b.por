programa {
  funcao inicio() {
    // informações
    inteiro a,b 
    // entradas
    escreva("Digite o primeiro número: ")
    leia(a)
    escreva("Digite o segundo número: ")
    leia(b)
    // processamento e saída
    se(a > b){
      escreva("O primeiro número é o maior: " + a)
    }senao se(b > a){
        escreva("O segundo número é o maior: " + b)
    }senao{
        escreva("Os dois são iguais")
    }
  }
}
