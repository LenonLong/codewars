/*
When provided with a letter, return its position in the alphabet.

Input :: "a"
Ouput :: "Position of alphabet: 1"
*/
const position = letter => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const position = alphabet.indexOf(letter) + 1;

    return `Position of alphabet: ${position}`
}

console.log(position("a"));  // =>  "Position of alphabet: 1"
console.log(position("z"));  // =>  "Position of alphabet: 26"
console.log(position("e"));  // =>  "Position of alphabet: 5"
