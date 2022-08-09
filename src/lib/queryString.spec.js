const { queryString } = require('./queryString'); 

describe('Objeto para query string', () => {
    test('Cria uma query string válida quando um objeto é fornecido', () => {
        const objeto = {
            nome: 'Melissa',
            profissao: 'desenvolvedora',
          };
      
          expect(queryString(objeto)).toBe(
            'nome=Melissa&profissao=desenvolvedora'
            );
    });
})