/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/
// solution #1
// function rowSumOddNumbers(n) {

//     return Math.pow(n, 3);
// }

// console.log((rowSumOddNumbers(1))) // => 1
// console.log((rowSumOddNumbers(3))) // => 27
// console.log((rowSumOddNumbers(42))) // => 74088


// solution #2
function rowSumOddNumbers(n) {
      // Calculate the first number in the nth row
      const firstNumber = (n * (n - 1)) + 1;

      // Calculate the sum of n consecutive odd numbers
      let sum = 0;
      for (let i = 0; i < n; i++) {
          const oddNumber = firstNumber + (i * 2);
          sum += oddNumber;
      }
  
      return sum;
}

console.log((rowSumOddNumbers(1))) // => 1
console.log((rowSumOddNumbers(3))) // => 27
console.log((rowSumOddNumbers(42))) // => 74088
