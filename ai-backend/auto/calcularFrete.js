function calcularFrete(peso) {
  if (peso <= 1) return 10;
  if (peso <= 5) return 20;
  return 35;
}

module.exports = calcularFrete;