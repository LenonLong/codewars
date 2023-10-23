/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/
function longest(s1, s2) {
    // Concatenate the two input strings
    const combineStr = s1 + s2;

    // Convert combine str to array of characters
    const charArray = combineStr.split('');

    // Create set to store unique values
    let uniqueChars = new Set(charArray);

    // convert teh set back to a string
    const resultStr = Array.from(uniqueChars).sort().join('');

    return resultStr

  }
console.log(longest("aretheyhere", "yestheyarehere"))// => "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))// => "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions"))// => "acefghilmnoprstuy"
