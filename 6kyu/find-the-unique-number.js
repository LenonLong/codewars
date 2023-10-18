/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique

*/
function findUniq(arr) {
    // Sort the first three elements, as the unique number is guaranteed to be in the first three.
    const sortArr = arr.sort((a,b) => a - b);
    
    // If the first element is different from the second, it's the unique number.
    if (sortArr[0] !== sortArr[1]) {
        return sortArr[0];
    }
      
    return arr[arr.length -1]
  }
  console.log((findUniq([ 1, 0, 0 ])));// => 1
  console.log((findUniq([ 0, 1, 0 ])));// => 1
  console.log((findUniq([ 0, 0, 1 ])));// => 1
  console.log((findUniq([ 1, 1, 1, 2, 1, 1 ])));// => 2
  console.log((findUniq([ 1, 1, 2, 1, 1 ])));// => 2
  console.log((findUniq([ 3, 10, 3, 3, 3 ])));// => 10
