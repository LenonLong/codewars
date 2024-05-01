/*
Sum of Odd Cubed Numbers:
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/
const cubeOdd = arr => {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        // Check if the element is a number
        if (typeof(arr[i]) === 'number') {
            // Check if the number is odd
            if (arr[i] % 2 !== 0) {
                // Cube the odd number and add it to the result
                result += Math.pow(arr[i], 3);
            }
        } else {
            // If any element is not a number, return undefined
            return undefined;
        }
    }
    
    return result;
}

console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3,-2,2,3]), 0);
console.log(cubeOdd(["a",12,9,"z",42]), undefined);
