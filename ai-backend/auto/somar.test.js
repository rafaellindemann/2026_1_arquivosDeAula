const somar = require('./somar');

test('deve retornar 5 ao somar 2 e 3', () => {
  expect(somar(2, 3)).toBe(5);
});

test('deve retornar 0 ao somar 0 e 0', () => {
  expect(somar(0, 0)).toBe(0);
});

test('deve retornar -1 ao somar 2 e -3', () => {
  expect(somar(2, -3)).toBe(-1);
});