/*
Sum of Digits / Digital Root
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/
const digitalRoot = n => {
    let total = 0;
    let toStringNum = n.toString().split('')
    
    for (let strNum of toStringNum) {
        total += Number(strNum)
    }
    if (total < 10) {
        return total
    } else {
        return digitalRoot(total)
    }
}

console.log(digitalRoot(16), 7 )
console.log(digitalRoot(456), 6 )

/*
1. Initialization
    - let total = 0;: This initializes a variable total to store the sum of the digits.
    - let toStringNum = n.toString().split(''): This converts the input number n to a string using the toString() method, then splits it into an array of individual digits using the split('') method. The digits are stored in the array toStringNum.

2. Iterating Over Digits:
    - for (let strNum of toStringNum) { ... }: This loop iterates over each element (strNum) in the toStringNum array, which contains the individual digits of the input number.

3. Summing Digits:
    - total += Number(strNum): Inside the loop, each digit (which is initially a string) is converted to a number using the Number() function, and then added to the total sum.

4. Checking for Single Digit:
    - if (total < 10) { ... } else { ... }: After summing all the digits, this condition checks if the total is less than 10. If it's less than 10, it means we have already obtained the digital root, so the function returns the total.

5. Recursive Call:
    - return digitalRoot(total): If the total is not a single digit (i.e., greater than or equal to 10), the function calls itself recursively with the new total as the argument. This repeats the process of summing the 
      digits until a single-digit number is obtained.
*/

// Alternative Solution:
// function digitalRoot(n) {
//     return (n - 1) % 9 + 1;
//   }
  
