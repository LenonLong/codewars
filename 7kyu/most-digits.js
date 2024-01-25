/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

*/
function findLongest(array){
 let longestNumber = array[0];

 for (let i = 1; i < array.length; i++) {
    if (array[i].toString().length > longestNumber.toString().length) {
        longestNumber = array[i];
    }
  }
  return longestNumber
}
  console.log(findLongest([1, 10, 100]), 100)
  console.log(findLongest([9000, 8, 800]), 9000)
  console.log(findLongest([8, 900, 500]), 900)
