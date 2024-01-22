const factorialResultado = require('../factorial');

test ('Numero will get the factorial done', ()=> {
    expect(factorialResultado(5).toBe(120));
} )