/*
Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.
You can assume the input will always be a number.
*/
function validateCode (code) {
    // Regular expression pattern to match if the code starts with 1, 2, or 3
    let pattern = /^[1-3]/;
    // Convert the code to a string to ensure consistency
    code = code.toString();
    // Use test method of RegExp to check if the code matches the pattern
    return pattern.test(code);
}

console.log(validateCode(123), true);
console.log(validateCode(248), true);
console.log(validateCode(8), false);
console.log(validateCode(321), true);
console.log(validateCode(9453), false);
