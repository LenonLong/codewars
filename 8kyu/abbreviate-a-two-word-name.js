/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/
function abbrevName(name){

    let splitStr = name.split(' ');
    
    let firstInitials =  splitStr[0][0].toUpperCase();
    let lastInitials = splitStr[1][0].toUpperCase();
    
    return `${firstInitials}.${lastInitials}`;
}

console.log(abbrevName("Sam Harris")); // => "S.H"
console.log(abbrevName("patrick feenan")); // =>  "P.F"
console.log(abbrevName("Evan Cole")); // =>  "E.C"
console.log(abbrevName("P Favuzzi")); // =>  "P.F"
console.log(abbrevName("David Mendieta")); // =>  "D.M"
