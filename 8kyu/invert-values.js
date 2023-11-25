/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
 */
const invert = array => {
    return array.map((num) => -num);
}

 console.log((invert([1,2,3,4,5]))); // =>  [-1,-2,-3,-4,-5]
 console.log((invert([1,-2,3,-4,5]))); // =>  [-1,2,-3,4,-5]
 console.log((invert([]))); // =>  []
 console.log((invert([0]))); // =>  [0]

/*
function invert(array) {
    let invertArr = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            invertArr.push(0)
        } else {
            invertArr.push(-array[i]);
        }
    }
    return invertArr
 }
*/
