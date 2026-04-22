const calcularPontos = require('./peba');

// 1	10	5	35
test("10v e 5e, 35 pontos: ",() => {
    expect(calcularPontos(10,5)).toBe(35);
})

// 2	3	2	11
test("3v e 2e, 11 pontos: ",() => {
    expect(calcularPontos(3,2)).toBe(11);
})

// 3	0	7	7
test("0v e 7e, 7 pontos: ",() => {
    expect(calcularPontos(0,7)).toBe(7);
})