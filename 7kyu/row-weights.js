/*
Scenario:
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task:
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes:
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)

Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)

Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)

Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
*/
const rowWeights = array => {
    let t1 = array.filter((value, index) => index % 2 === 0).reduce((a, item) => a + item, 0);
    let t2 = array.filter((value, index) => index % 2 !== 0).reduce((a, item) => a + item,0);

    return [t1, t2]
}

console.log(rowWeights([80]));           // => [80,0]
console.log(rowWeights([100,50]));       // => [100,50]
console.log(rowWeights([50,60,70,80]));  // => [120,140]
console.log(rowWeights([13,27,49]));     // => [62,27]

/* original code:

// function rowWeights(array){
//     let odd = 0;
//     let even = 0;
//     if (array.length <= 1) {
//         return [...array, 0]
//     }
//     for (let i = 0; i < array.length; i++) {
//         if (i % 2 !== 0) {
//              odd += array[i] 
//         } else {
//             even += array[i]
//         }
//     }
//     return [even, odd]
// }
*/
