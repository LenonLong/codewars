/*
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

 */
function isPalindrome(x) {
   if (x.length < 1) {
    return true;
   }
   let testStr = x.toLowerCase();
   
   for (let i = 0, j = testStr.length - 1; i < j; i++, j--) {
    if (testStr[i] !== testStr[j]) {
      return false; // If characters at both ends don't match, it's not a palindrome.
    }
   }
   return true;
  }
  console.log(isPalindrome("Abba")) // => true
