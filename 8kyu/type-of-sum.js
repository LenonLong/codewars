/*
Return the type of the sum of the two arguments
*/
const typeOfSum = (arg1, arg2) => {
    return typeof(arg1 + arg2)
}

console.log(typeOfSum(12, 1), 'number');
console.log(typeOfSum('d', 1), 'string');
console.log(typeOfSum(1, 'a'), 'string');
console.log(typeOfSum('dd', ''), 'string');
console.log(typeOfSum(true, 1), 'number');
console.log(typeOfSum('s', false), 'string');
console.log(typeOfSum(null, 1), 'number');
console.log(typeOfSum('s', null), 'string');
console.log(typeOfSum(null, undefined), 'number');
console.log(typeOfSum(undefined, 're'), 'string');
