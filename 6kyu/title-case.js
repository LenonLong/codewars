/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be 
an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. 
Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

Arguments (Other languages):
First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

Example:
titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/
function titleCase(title, minorWords) {
   // Convert the string to lowercase and split it into an array of words
  const words = title.toLowerCase().split(' ');

  // Create an array of minor words, converted to lowercase
  const minorWordsArray = minorWords ? minorWords.toLowerCase().split(' ') : []

  // Loop through each word and capitalize the first letter if it's not a minor word or the first word
  for (let i = 0; i < words.length; i++) {
    if (i === 0 || !minorWordsArray.includes(words[i])) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }

  // Join the words back into a string and return it
  return words.join(' ');
}

console.log(titleCase('a clash of KINGS', 'a an the of'))   // =>  'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')) // =>  'The Wind in the Willows'
console.log(titleCase('the quick brown fox'))               // =>  'The Quick Brown Fox'

/*
1. function called titleCase that takes two parameters: title (the string to be title-cased) and minorWords (optional, a string containing minor words that should not be capitalized unless they are the first word).
2. const words converts the title string to lowercase using the toLowerCase() method and then splits it into an array of words using the split(' ') method. Each word is separated by a space.
3. the minorWords string is converted to lowercase using toLowerCase() and split into an array of words. If minorWords is not provided (it's undefined), an empty array is assigned to minorWordsArray.
4. The loop iterates over each word in the words array.
        - For each word:
        - If it's the first word (i === 0), or if it's not included in the minorWordsArray, the first letter is capitalized. This is done by concatenating the capitalized first letter (words[i][0].toUpperCase()) 
          with the rest of the word (words[i].slice(1)).
        - If it's a minor word and not the first word, it remains unchanged.

5. Finally, the modified words array is joined back into a string using the join(' ') method, with each word separated by a space.
*/
