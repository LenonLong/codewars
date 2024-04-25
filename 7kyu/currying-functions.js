/*
To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. 
This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];
You must not mutate the original array.

Here's a nice Youtube video about currying, which might help you if this is new to you.
*/
const multiplyAll = (arr) => {
    return (mult) => {
        let result = arr.map(ele => ele * mult )
        return result
    }
}

console.log( multiplyAll ([1,2,3]) (2)); // => [2, 4, 6]
console.log( multiplyAll ([1,2,3]) (1)); // => [1, 2, 3]
console.log( multiplyAll ([1,2,3]) (0)); // => [0, 0, 0]

/*
1. Function Declaration:
    - Declare a function named multiplyAll using arrow function syntax.
    - It takes one parameter arr, which is an array of integers.
2. Returning a Function:
    - Inside multiplyAll, return another function.
    - This inner function takes a single parameter mult, representing the multiplier.
3. Multiplying Elements:
    - Within the inner function, use the map() method to iterate over each element of the input array arr.
    - Multiply each element by the multiplier mult.
4. Returning the Result:
    - After multiplying each element, return the resulting array.
5. Calling the Function:
    - Call the multiplyAll function with the array [1,2,3] as an argument.
    - This returns another function.
    - Immediately call this returned function with 2 as an argument.
    - The multiplication operation is performed, and the final result [2, 4, 6] is printed to the console.
*/
