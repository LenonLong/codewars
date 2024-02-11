/*
Filter the number:
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
*/
const filterString = (value) => {
    return parseInt(value.replace(/[^0-9]/g, ''));
  
}

console.log(filterString("123"), 123, `For the input "123"`);
console.log(filterString("a1b2c3"), 123, `For the input "a1b2c3"`);
console.log(filterString("aa1bb2cc3dd"), 123, `For the input "aa1bb2cc3dd"`);

/**

1. return parseInt(value.replace(/[^0-9]/g, ''));: This is the body of the arrow function. Let's dissect it:
    - value.replace(/[^0-9]/g, ''): This part uses the replace method of strings along with a regular expression to remove any characters that are not digits (0-9) from the value string. 
      The regular expression /[^0-9]/g matches any character that is not a digit.
    - parseInt(...): This converts the modified string back into an integer. parseInt is a JavaScript function that parses a string argument and returns an integer.
 */
