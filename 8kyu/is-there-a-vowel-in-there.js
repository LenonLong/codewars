/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
If they are, change the array value to a string of that vowel.
Return the resulting array.
*/
const isVow = a => {
    let map = a.map(num => {
       let char = String.fromCharCode(num)
       return 'aeiou'.includes(char) ? char : num;
    })
    return map
}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
// console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);

/*
1. We declares a function named isVow using arrow function syntax. It takes one parameter a, which is an array of numbers.
2. We use the map() method to iterate through each element of the array a. For each element num, we perform a transformation.
3. Inside the map() function, we first convert each number num to its corresponding character using String.fromCharCode(num). Then, we check if the character char is included in the string 'aeiou', which contains all lower case vowels. 
   If char is a vowel, we return the character itself; otherwise, we return the original number num.
4. After the map() function finishes iterating through all elements of the array a, we store the modified array in the variable map. Finally, we return this modified array.

So, this function isVow takes an array of numbers, converts each number to its corresponding character, checks if it's a vowel, and returns either the character or the original number based on the check. 
The function ultimately returns an array containing characters where applicable and numbers where no vowels were found.
*/
