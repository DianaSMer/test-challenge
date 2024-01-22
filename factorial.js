/**
 * Implement a function to calculate the factorial of a number using recursion.
 */

const factorialResultado = function factorial (numero) {
    if (numero === 0) {
        return 1;
    }
    else {
        return numero * factorial (n-1);
    }
}

module.exports = factorialResultado;