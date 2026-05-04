programa {
  funcao inicio() {
    real salario 
    inteiro dias
    real salarioDiario

    escreva("Digite seu salário: ")
    leia(salario)
    escreva("Quantos dias trabalhou no mês: ")
    leia(dias)
    salarioDiario = salario / dias
    escreva("\nPor dia você recebe R$" + salarioDiario)
  }
}
