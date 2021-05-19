/* eslint-disable max-lines-per-function */
const sum = require('./sum');

describe('Função sum()', () => {
  it('1 - Se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('2 - Se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('3 - Se retorna erro ao receber string no parâmetros', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  it('4 - Se retorna o erro "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  });
});
