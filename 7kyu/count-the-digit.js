/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.

Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

The function, when given n = 25 and d = 1 as argument, should return 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.
Note that 121 has twice the digit 1.
*/
function nbDig(n, d) {
    let count = 0;

    // Loop through numbers from 0 to n
    for (let k = 0; k <= n; k++) {
        // Calculate the square of the current number
        const square = k * k;

        // Convert the square to a string
        const squareString = square.toString();

        // Loop through each digit of the square
        for (let i = 0; i < squareString.length; i++) {
            // Check if the current digit equals d
            if (parseInt(squareString[i]) === d) {
                // Increment the count if the condition is met
                count++;
            }
        }
    }

    // Return the final count
    return count;
}

console.log(nbDig( 5750, 0)); // =>  4700, "n = 5750, d = 0"
// console.log(nbDig(11011, 2)); // =>  9481, "n = 11011, d = 2"
// console.log(nbDig(12224, 8)); // =>  7733, "n = 12224, d = 8"
// console.log(nbDig(11549, 1)); // => 11905, "n = 11549, d = 1"

/*
function nbDig(n, d) {
    var res = 0;
    
    for (var g = 0; g <= n; g++){
      var square = (g*g+"").split("");
      square.forEach((s) => s== d ? res++ :null)
    } 
    return res;
}
*/
