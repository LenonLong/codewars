/*
Task:
- Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
Notes:
- Array/list size is at least 2.
- Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples:

adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

// * * * * * * * *
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10  =  50 .

// * * * * * * * *
adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
*/
const adjacentElementsProduct = array => {
   let total;
   let max = -Infinity

   for (let i = 0; i < array.length - 1; i++) {
    total = (array[i] * array[i + 1])
    if (total > max) {
        max = total;
    }
   }
   return max
}

console.log(adjacentElementsProduct([4, 12, 3, 1, 5])); // => 48
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4])); // => 6
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])) // ==>  return -14

/*
By initializing max to -Infinity, we guarantee that any valid product of adjacent elements will replace the initial value of max in the loop, ensuring that the maximum product found so far is accurately stored. 
This approach avoids issues that could arise if max were initialized to null or 0, as it ensures that the product of adjacent elements is always greater than the current value of max.
*/
