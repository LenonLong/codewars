/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/
const divCon = x => {
    let result = 0
    for (let i = 0; i < x.length; i++) {
       let element = x[i];

       if (typeof(element) === 'number') {
        result += element;
        
       } else {
        result -= Number(element);
       }
    }
    return result
}

console.log(divCon([9, 3, '7', '3']));                       // => 2
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]));      // => 14
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']));  // => 13

/* alternative solution:

function divCon(x){
  return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
}
*/
