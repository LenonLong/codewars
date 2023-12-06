/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/
function addBinary(a,b) {
    let binary = (a + b).toString(2)
    return binary
}

console.log(addBinary(1, 1)); // => 10
console.log(addBinary(5 ,9)); // => 1110

/*
This line of code takes the sum of a and b, then uses toString(2) to convert that sum into its binary representation (base 2). 
The resulting string (binary) contains the binary representation of the sum of a and b.

The radix parameter in toString() allows you to specify different bases for representation, such as converting a number to hexadecimal (base 16), octal (base 8), or binary (base 2), among others.
*/
