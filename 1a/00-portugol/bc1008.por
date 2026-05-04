programa {
  funcao inicio() {
    // informações
    inteiro id, horasTrabalhadas
    real valorHora, salario
    // leitura
    escreva("Id funcionário: ")
    leia(id)
    escreva("Quantidade de horas trabalhadas: ")
    leia(horasTrabalhadas)
    escreva("Valor hora: ")
    leia(valorHora)
    // processamentos
    salario = horasTrabalhadas * valorHora
    // saídas
    escreva("\n===================\n")
    // NUMBER = 25
    escreva("NUMBER = " + id)
    // SALARY = U$ 550.00
    escreva("\nSALARY = U$ " + salario)
    escreva("\n===================\n")
  }
}
