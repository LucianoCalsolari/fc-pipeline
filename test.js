const { soma, subtracao, multiplicacao, divisao } = require('./app');


describe("Testes automatizados da aplicação de lista de tarefas", function() {
  it('soma 2 + 3 deve ser igual a 5', () => {
    expect(soma(2, 3)).toBe(5);
  });
  it('subtração 5 - 2 deve ser igual a 3', () => {
    expect(subtracao(5, 2)).toBe(3);
  });
  
  it('multiplicação 2 * 4 deve ser igual a 8', () => {
    expect(multiplicacao(2, 4)).toBe(8);
  });
  
  it('divisão 10 / 2 deve ser igual a 5', () => {
    expect(divisao(10, 2)).toBe(5);
  });
  
  it('divisão por zero deve lançar um erro', () => {
    expect(() => {
      divisao(10, 0);
    }).toThrow('Não é possível dividir por zero.');
  });
});