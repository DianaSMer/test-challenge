/**
 * **FizzBuzz Function:**
       - Develop a function that accepts a number and evaluates the following conditions:
          - If divisible by 3, return 'Fizz'.
          - If divisible by 5, return 'Buzz'.
          - If divisible by both 3 and 5, return 'FizzBuzz'.
          - Otherwise, return the original number.
 */

const fizzBuzz = function (num) {

if (num% 3 === 0) {
    return 'fizz';
}
 else if (num % 5 === 0){
    return 'buzz'
 }
 else if (num% 3 && 5 === 0 ) {
    return 'FizzBuzz'
 } else {
    return num;
 }
}


module.exports = fizzBuzz;


