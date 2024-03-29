/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
Example:
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

*/
function generateShape(n){
    let shape = '';
    for (let i = 0; i < n; i++) {
        shape += '+'.repeat(n) + '\n' 
    }
    return shape.trim()
}

console.log(generateShape(8))

/*
'++++++++\n
 ++++++++\n
 ++++++++\n
 ++++++++\n
 ++++++++\n
 ++++++++\n
 ++++++++\n
 ++++++++'

*/
/*
1. function generateShape(n){...}: This line defines a JavaScript function named generateShape that takes a single parameter n.
2. let shape = '';: This line declares a variable named shape and initializes it with an empty string. This variable will be used to accumulate the string representation of the shape.
3. for (let i = 0; i < n; i++) { ... }: This is a for loop that iterates from 0 to n - 1. In each iteration, it appends a row of + characters to the shape string.
4. shape += '+'.repeat(n) + '\n': In each iteration of the loop, this line appends n + characters to the shape string using the repeat() method. It also appends a newline character \n at the end to start a new row.
5. return shape.trim(): After the loop completes, this line returns the accumulated shape string. However, before returning, it trims any leading and trailing whitespace characters (including newline characters) from the string using the trim() method.

So, when you run generateShape(8), it generates a string representing an 8x8 square made of + characters, with each row separated by newline characters. 
The .trim() method ensures that any unnecessary leading or trailing whitespace (including the trailing newline character) is removed from the resulting string before it's returned and logged.
*/
