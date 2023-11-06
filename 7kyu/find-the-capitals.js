/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
*/
const capitals = (word) => {
    let splitWord = word.split('')
    let result = [];

     splitWord.forEach((val, index) => {
        if (val === val.toUpperCase()) {
            result.push(index)
        }
    })
    return result
}

console.log(capitals('CodEWaRs')); // => [0,3,4,6] 
