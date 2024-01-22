const dna = require('../dna');

test ('Should return empty if there is no text', ()=> {
    expect (dna ('')).toBe ('empty');
} )