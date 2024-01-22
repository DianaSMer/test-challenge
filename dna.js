/**
 * Create a function to process a DNA string (e.g., 'CTAGGGTA').
       - The function should remove any non-canonical DNA bases (anything other than 'C', 'T', 'A', 'G').
       - The function should be case sensitive (keep 'C' but remove 'c').
       - If the DNA string is empty, return an empty string.
 */


const dna = function(string) {
    if (string === '') {
        return 'empty';
    }

    const dna = string.toUpperCase();
    return dna;
    
    

}

module.exports = dna;