/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

*/
const getNumberFromString = (s) => {
    let result = '';
    const numKey = '1234567890';

    for (let i = 0; i < s.length; i++) {
       if (numKey.includes(s[i])) result += s[i]
    }
    return parseInt(result)
}

console.log(getNumberFromString("1"), 1);
console.log(getNumberFromString("123"), 123);
console.log(getNumberFromString("this is number: 7"), 7);
