const salario = require('./bc1008');

test("Salario de 100 horas por U$ 5.50, retornar '550': ",() => {
    expect(salario(25,100,5.50)).toBe("Number = 25\nSalary = U$ 550.00");
})