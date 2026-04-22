function salario(id,horas,vh){
    return `Number = ${id}\nSalary = U$ ${(horas*vh).toFixed(2)}`;
}

module.exports = salario;