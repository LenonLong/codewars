/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

const count = (string) => {
    let result = {};
    let count = 0;
    if (string.length === 0) {
        return result;
    }

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (result[char]) {
            result[char]++;

        } else {
            result[char] = 1;
        }
    }

    return result;
}

// console.log(count('')) // => {}
console.log(count('a')) // => {'a': 1}
console.log(count('ab')) // =>  {'a': 1, 'b': 1}
console.log(count('aba')) // =>  {'a': 2, 'b': 1}
console.log(count('ABC')) // =>  {'A': 1, 'B': 1, 'C': 1}

/*
1. We initialize an empty object called result to store the character counts.

2. We check if the input string is empty. If it is, we return the empty result object immediately as specified.

3. We then loop through each character in the input string using a for loop.

4. For each character, we check if it already exists as a key in the result object. If it does, we increment the count for that character. If not, we initialize the count to 1.

5. Finally, we return the result object, which contains the character counts.
*/
