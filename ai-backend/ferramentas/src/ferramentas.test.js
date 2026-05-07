const {converterMetroEmPe, converterPeEmMetro, converterDecimalParaBinario, converterBinarioParaDecimal} = require('./ferramentas');

test('1 metro vira 3,281 pé', () => {
  expect(converterMetroEmPe(1)).toBe(3.281);
});
test('10 metros viram 32,81 pé', () => {
  expect(converterMetroEmPe(10)).toBe(32.81);
});
test('0 metro vira 0 pé', () => {
  expect(converterMetroEmPe(0)).toBe(0);
});

test('10 decimal vira 1010 binário', () => {
  expect(converterDecimalParaBinario(10)).toBe('1010');
});
test('1010 binário vira 10 decimal', () => {
  expect(converterBinarioParaDecimal('1010')).toBe(10);
});



// test("", () => {
//     expect().toBe();
//   });