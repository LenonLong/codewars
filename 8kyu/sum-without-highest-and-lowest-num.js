/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/
function sumArray(array) {
    if (array === null || array === undefined ||array.length <= 2 ) {
        return 0
    }
    
    const sortArr = [...array].sort((a, b) => a - b);

    sortArr.splice(0, 1);
    sortArr.splice(sortArr.length -1)
    
    let sum = 0;

    for (const num of sortArr) {
        sum += num;
    }
    
    return sum;
}
console.log( sumArray(null)); // => 0
console.log( sumArray([ ])); // => 0
console.log( sumArray([ 3 ])); // => 0
console.log( sumArray([ 3, 5 ])); // => 0
console.log( sumArray([ 6, 2, 1, 8, 10 ])); // =>  16 
console.log( sumArray([ 0, 1, 6, 10, 10 ])); // => 17 
console.log( sumArray([ -6, -20, -1, -10, -12 ])); // => -28 
console.log( sumArray([ -6, 20, -1, 10, -12 ])); // => 3 
