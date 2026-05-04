programa {
  funcao inicio() {
    // informações - variáveis
    real precoTotal, custoDenis = 500, valorHora = 350, lucro
    inteiro horas
    // leituras - entradas
    escreva("Quantas horas foram estimadas? ")
    leia(horas)
    // processamentos - cálculos
      // precoTotal = 500 + horas * 350
    precoTotal = custoDenis + horas * valorHora
    lucro = precoTotal - custoDenis
    // apresentar resultados
    escreva("Valor a cobrar: R$" + precoTotal)
    escreva("\nLucro nesse freela: R$" + lucro)
  }
}

// - Junin cobra por hora. 350 pila a cada hora de trabalho.
// - Denis cobra 500 pila por projeto
// - entradas
//   quantidade de horas
// - saídas
//   preço para o cliente

// Entre estudos e seu estágio, Junin encontra tempo para fazer uns projetos freela (free lancer, bico…) e levantar mais uma grana extra. Nestes projetos, Junin cobra de acordo com a quantidade de horas estimadas para desenvolver.

// Como Junin ainda tem pouca experiência, contrata o experiente dev Denis Nery para analisar a demanda, identificar e documentar o que precisa ser feito e estimar quantas horas Junin precisará para desenvolver. Por este serviço, Denis Nery cobra R$500,00 de Junin.

// Junin então cobra do seu cliente os R$500,00 que paga para o consultor mais R$350,00 por hora estimada de desenvolvimento.

// Crie um programa que leia a quantidade estimada de horas e calcule e informe o preço que Junin deve cobrar do seu cliente.

// Desafio: Informar quanto foi o lucro do freela.
