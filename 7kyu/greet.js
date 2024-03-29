/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

const greet = name => {
    const capitalFirstChar = name[0].toUpperCase();
    return 'Hello ' + capitalFirstChar + name.slice(1).toLowerCase() + '!'
}

console.log(greet('riley')); // => 'Hello Riley!'
console.log(greet('BILLY'))

//  return `Hello ${name.slice(0,1).toUpperCase()}${name.slice(1).toLowerCase()}!`;
