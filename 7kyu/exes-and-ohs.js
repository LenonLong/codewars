/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/
function XO(str) {
    let splitStr = str.toLowerCase().split('')
    let test1 = 'x'
    let test2 = 'o'
    let xCount = 0;
    let oCount = 0
    
    splitStr.map(letter => {
        if (test1.includes(letter)) {
            xCount++;
        } else if (test2.includes(letter)) {
            oCount++;
        }
    })
  return xCount === oCount
}

console.log(XO('xo'),true); // => true
console.log(XO("xxOo")); // => true
console.log(XO("xxxm"),false); // => false
console.log(XO("Oo"),false); // => false
console.log(XO("ooom"),false); // => false

/*
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}
*/
