const {sum} = require('./calculadora');

test('deve somar 2+2 com resultado 4', () => {
    expect(sum(2,2)).toBe(4);
});

test('deve somar 2+2 com resultado 4 mesmo que um deles seja uma string', () => {
    expect(sum('2','2')).toBe(4);
});

test('retorna um erro se o que for fornecido ao método não puder ser somado', () => {
    expect(() => {
        sum('', '2')
    }).toThrowError();

    expect(() => {
        sum([2,2])
    }).toThrowError();

    expect(() => {
        sum({})
    }).toThrowError();

    expect(() => {
        sum()
    }).toThrowError();
});