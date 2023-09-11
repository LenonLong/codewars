/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/
function removeChar(str){
    //You got this!
    if (str.length < 2) {
        return str;
    }
    let newStr = '';
    for (let i = 1; i < str.length - 1; i++) {
        newStr += str[i]
    }
    return newStr;
   };
   
console.log((removeChar('eloquent'))); // => loquen
console.log((removeChar('country'), 'ountr'));
console.log((removeChar('person'), 'erso'));
console.log((removeChar('place'), 'lac'));
console.log((removeChar('ooopsss'), 'oopss'));
   
   