const fizzBuzz = require('../fizzBuzz');

test('Num is divisible by 3 or 5 to return fizz or buzz', () =>{
    expect(fizzBuzz(15)).toBe('fizz', 'buzz', 'FizzBuzz');
})


