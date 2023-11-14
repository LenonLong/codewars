/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/
const sumDigits = (number) => {
    let sum = 0; 
    const absNumber = Math.abs(number); // Get the absolute value of the number
    const numToStr = absNumber.toString();  // Convert the absolute number to a string

    for (let i = 0; i < numToStr.length; i++) {
        sum += parseInt(numToStr[i]); // Convert the character to its integer equivalent and add it to the sum
    }
    return sum;
}

console.log(sumDigits(10)); // =>  1
console.log(sumDigits(99)); // =>  18
console.log(sumDigits(-32)); // =>  5

/*
function sumDigits(number) {
  return Math.abs(number)       // Get the absolute value of the number
    .toString()                 // Convert the absolute number to a string
    .split('')                  // Split the string into an array of characters
    .reduce(function (a, b){    // Use reduce to sum all array elements
        return +a + +b          // Convert characters to numbers and sum them
    }, 0);                      // Start the sum from 0
}
*/
