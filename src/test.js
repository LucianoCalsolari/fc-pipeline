const { soma, subtracao, multiplicacao, divisao } = require('./app');

test('soma 2 + 3 deve ser igual a 5', () => {
  expect(soma(2, 3)).toBe(5);
});

test('subtração 5 - 2 deve ser igual a 3', () => {
  expect(subtracao(5, 2)).toBe(3);
});

test('multiplicação 2 * 4 deve ser igual a 8', () => {
  expect(multiplicacao(2, 4)).toBe(8);
});

test('divisão 10 / 2 deve ser igual a 5', () => {
  expect(divisao(10, 2)).toBe(5);
});

test('divisão por zero deve lançar um erro', () => {
  expect(() => {
    divisao(10, 0);
  }).toThrow('Não é possível dividir por zero.');
});