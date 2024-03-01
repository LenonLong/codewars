/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

function noOdds( values ){
  let evenVals = [];

  for (let val of values) {
    if (val % 2 === 0) {
        evenVals.push(val)
    }
  }
  return evenVals
}

console.log( noOdds( [0,1] )) // => [0]
console.log( noOdds( [0,1,2,3] )) // => [0,2]


// var noOdds = values => values.filter(x => x % 2 === 0);
