/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/
function encode(str) {
    return str.replace(/[aeiou]/g, function (x) {
      return '_aeiou'.indexOf(x);
    });
  }
  
  function decode(str) {
    return str.replace(/[1-5]/g, function (x) {
      return '_aeiou'.charAt(x);
    });
  }
console.log(encode('hello'));                       // => 'h2ll4'
console.log(encode('How are you today?'));          // => 'H4w 1r2 y45 t4d1y?'
console.log(encode('This is an encoding test.'));   // => 'Th3s 3s 1n 2nc4d3ng t2st.'
console.log(decode('h2ll4'));                       // => 'hello'

/*
1. The encode() function takes a string as input.
2. The replace() method is called on the input string with a regular expression that matches all lowercase vowels.
3. The second argument to replace() is a function that takes the matched vowel as an argument and returns the corresponding number according to the pattern you provided.
4. The indexOf() method is called on the string “_aeiou” to find the index of the matched vowel.
5. The index is returned as the replacement for the matched vowel.
6. The decode() function takes a string as input.
7. The replace() method is called on the input string with a regular expression that matches all numbers from 1 to 5.
8. The second argument to replace() is a function that takes the matched number as an argument and returns the corresponding vowel according to the pattern you provided.
9. The charAt() method is called on the string “_aeiou” with the matched number as the argument to find the corresponding vowel.
10. The vowel is returned as the replacement for the matched number.
*/
