/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

**  The next perfect square can be found by adding 1 to square root and squaring the sum
*/
function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))) return (Math.sqrt(sq) + 1) ** 2;
    // Return the next square if sq is a perfect square, -1 otherwise
    return -1;
  }

  console.log(findNextSquare(121))  // => 144
  console.log(findNextSquare(625)) //  => 676
  console.log(findNextSquare(114)) //  => -1

  /*
1. The function Number.isInteger() is used to check if the square root of the input sq is an integer. This condition determines whether sq is a perfect square or not.
2. If the square root of sq is an integer (i.e., Number.isInteger(Math.sqrt(sq)) is true), it means that sq is a perfect square.
3. Inside the if block, (Math.sqrt(sq) + 1) ** 2 calculates the square of the next integer after the square root of sq. This value represents the next perfect square after sq.
4. If sq is not a perfect square (i.e., the square root of sq is not an integer), the function returns -1, indicating that there is no next perfect square.
  */
