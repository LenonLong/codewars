/*
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.
*/
function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
   return n > m ? n % m : m % n
  }

    console.log(remainder(17,5)); // => 2
    console.log(remainder(13, 72)); // => 7, remainder(72, 13), 'The order the arguments are passed should not matter'
    console.log(remainder(1, 0)); // => NaN, 'Divide by zero should return NaN'
    console.log(remainder(0, 0)); // => NaN, 'Divide by zero should return NaN'
