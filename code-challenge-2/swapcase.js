//function that accepts a string as input and swaps the case of each character
function swapCase(word) {
    return word.split('').map(word => {
        if (word === word.toUpperCase()) {
            return word.toLowerCase();
        } else {
            return word.toUpperCase();
        }
    }).join('');
}
console.log(swapCase('The Quick Brown Fox'));