/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

// Refactored Code

const gimme = (arr) => {
     return arr.indexOf(arr.concat().sort((a, b) => a - b)[1])
}

console.log(gimme([2, 3, 1])); // => 0
console.log(gimme([5, 10, 14])); // => 1

console.log(gimme([2.1, 3.2, 1.4])); // => 0
console.log(gimme([5.9, 10.4, 14.2])); // => 1

console.log(gimme([-2, -3, -1])); // => 0
console.log(gimme([-5, -10, -14])); // => 1

/*
1. arr.concat() creates a new array that is a shallow copy of the input array arr. This is done to avoid modifying the original array, as sort will rearrange the elements in place.

2. arr.concat().sort((a, b) => a - b) sorts the copied array in ascending order using the sort method. The sorting is based on the result of the callback function (a, b) => a - b, 
   which ensures that the array is sorted numerically.

3. [1] is used to access the second element (the middle element) in the sorted array. In JavaScript, array indexing is 0-based, so [1] corresponds to the second element of the array.

4. arr.indexOf(...) is then used to find the index of the middle element in the original, unsorted array. It returns the first index at which the element is found.

5. The function returns this index, which represents the position of the middle element in the original array.

Here's how it works with your example inputs:
- gimme([2, 3, 1]):

    - The copied and sorted array is [1, 2, 3].
    - The middle element is 2.
    - The index of 2 in the original array is 0.
    - The function returns 0.
*/


// Original Code: 

// function gimme (triplet) {

//     for (let i = 0; i < triplet.length; i++) {
//         if ((triplet[i] < triplet[(i + 1) % 3] && triplet[i] > triplet[(i + 2) % 3]) ||
//         (triplet[i] > triplet[(i + 1) % 3] && triplet[i] < triplet[(i + 2) % 3])) {
//         return i;
//         }
//     }
//     return -1;
// }
