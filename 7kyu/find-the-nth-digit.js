/*
Find the nth Digit of a Number:
Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

Note
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
Examples(num, nth --> output)
5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1
*/
const findDigit = (num, nth) => {
    // Handle sign of the number
    num = Math.abs(num);

    // Check validity of nth
    if (nth <= 0 || !Number.isInteger(nth)) {
        return -1
    }
    // Convert number to string
    let numStr = num.toString()

    // Access the nth digit from right to left
    let index = numStr.length - nth;
    if (index < 0) {
        return 0; // Handle case when nth is greater than the number of digits
    }
    // Handle leading zeros
    numStr = numStr.padStart(nth, '0');
 
    // Return the nth digit
    return parseInt(numStr[index])
}

console.log(findDigit(5673, 4), 5);
console.log(findDigit(129, 2), 2);
console.log(findDigit(-2825, 3), 8);
console.log(findDigit(-456, 4), 0);
console.log(findDigit(0, 20), 0);
console.log(findDigit(65, 0), -1);
console.log(findDigit(24, -8), -1);
