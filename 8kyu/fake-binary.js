/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/
function fakeBin(x){
 let singleDigit = x.split('');
 let newStr = ''
 singleDigit.map((num)=> {
    if (parseInt(num) < 5) {
        newStr += '0'
    } else {
        newStr += '1'
    }
   
 })
 return newStr
}

console.log((fakeBin('45385593107843568'))) // => '01011110001100111'

console.log((fakeBin('509321967506747'))) // => '101000111101101'
