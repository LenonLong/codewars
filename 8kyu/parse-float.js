/*
Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
*/
function parseF(s) {
    const result = parseFloat(s);
    return isNaN(result) ? null : result;
  }

console.log(parseF("1"), 1.0);
