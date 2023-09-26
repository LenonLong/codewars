/*
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/
function isPangram(string){
    
    const sentence = string.toLowerCase().replace(/[^a-z]/g, '');

    const uniqueLetters = new Set(sentence);

    return uniqueLetters.size === 26;
  }

  var string = "The quick brown fox jumps over the lazy dog."
  console.log(isPangram(string)) // => true;

  var string = "This is not a pangram."
  console.log(isPangram(string)) // => false;

  /*
1. first convert the input sentence to lowercase using .toLowerCase() to make the check case-insensitive.

2. use the .replace() method with a regular expression (/[^a-z]/g) to remove all characters 
that are not lowercase letters (numbers and punctuation).

3. create a Set called uniqueLetters to store the unique letters in the cleaned sentence.

4. Finally, it checks if the size of the uniqueLetters Set is exactly 26, which is the number of letters in the English alphabet. 
If it is, the function returns true, indicating that the input string is a pangram; otherwise, it returns false.
  */
