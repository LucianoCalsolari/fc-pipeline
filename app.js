console.log("Test");

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) {
    throw new Error('Não é possível dividir por zero.');
  }
  return a / b;
}

module.exports = { soma, subtracao, multiplicacao, divisao };