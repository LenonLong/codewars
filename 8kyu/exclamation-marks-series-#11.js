/*
Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/
function replace(s){
  let vowels = /[aeiouAEIOU]/g

  return s.replace(vowels, '!')
    
  }

console.log(replace("Hi!") )       // => "H!!"
console.log(replace("!Hi! Hi!") )  // => "!H!! H!!"
console.log(replace("aeiou") )    // => "!!!!!"
console.log(replace("ABCDE"))     // =>  "!BCD!"
