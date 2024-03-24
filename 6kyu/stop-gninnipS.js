/*
Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/
const spinWords = (string) => {
    let words = string.split(' ');
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            result.push(words[i].split('').reverse().join(''))
            console.log(result)
        } else {
            result.push(words[i])
        }
    }
    return result.join(' ')
}

console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");

/* Alternative: 
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
*/
