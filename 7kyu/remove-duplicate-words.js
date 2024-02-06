/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/
const removeDuplicateWords = s => {
   const splitStr = s.split(' ');
   
   return [...new Set(splitStr)].join(' ')
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')); // => 'alpha beta gamma delta'

/*
1. const splitStr = s.split(' ');: This line splits the input string s into an array of words using the space character (' ') as the separator. 
   So, splitStr will be an array containing all the words from the input string.

2. [...new Set(splitStr)]: This part creates a new Set from the array splitStr. A Set is a collection of unique values, so any duplicate words 
   in splitStr will be automatically removed when converting it to a Set. The spread operator (...) is used to convert the Set back into an array.

3. .join(' '): Finally, .join(' ') is called on the array to concatenate all the words back into a string, with each word separated by a space.
*/
