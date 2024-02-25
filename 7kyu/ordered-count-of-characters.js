/*
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

function orderedCount(input) {
    let text = input.toString(); // Convert input to string
    let charCount = {}; // Initialize an empty object to store character counts
    
    // Iterate through each character and count occurrences
    for (let char of text) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Convert object to array of tuples, maintaining order of appearance
    let result = [];
    for (let char of text) {
        if (charCount[char] > 0) {
            result.push([char, charCount[char]]);
            charCount[char] = 0; // Reset count to avoid duplicate entries
        }
    }
    
    // Return the array of tuples
    return result;
}

console.log(orderedCount("abracadabra")) // ==> [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
console.log(orderedCount(233312));  // ==> [ [ '2', 2 ], [ '3', 3 ], [ '1', 1 ] ]

/*
const orderedCount = s =>
  Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));
*/
