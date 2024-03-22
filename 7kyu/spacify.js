/*
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"
*/
const spacify = str => str.split('').join(' ')


console.log(spacify('hello world'),'h e l l o   w o r l d');
console.log(spacify('12345'),'1 2 3 4 5');


/*
function spacify(str) {
    let spaceStr = '';

    for (let i = 0; i < str.length; i++) {
        spaceStr += str[i];
        if (i !== str.length - 1) { // Check if it's not the last character
            spaceStr += ' ';
        }
    }
    return spaceStr;
}
*/
