const calcularFrete = require('./calcularFrete');

test('deve cobrar 10 para peso até 1kg', () => {
  expect(calcularFrete(0.5)).toBe(10);
});

test('deve cobrar 20 para peso entre 1kg e 5kg', () => {
  expect(calcularFrete(3)).toBe(20);
});

test('deve cobrar 35 para peso acima de 5kg', () => {
  expect(calcularFrete(8)).toBe(35);
});