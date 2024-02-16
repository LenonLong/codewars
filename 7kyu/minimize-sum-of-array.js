/*
Minimize Sum Of Array (Array Series #1):

Task:
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes:
    - Array/list will contain positives only .
    - Array/list will always have even size

Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22

minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342

minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74
*/
const minSum = arr => {
    let sum = 0;
    let sortArr = arr.sort((a, b) => b - a);
    
    for (let i = 0; i < sortArr.length / 2; i++) {
        sum += sortArr[i] * sortArr[sortArr.length - 1 - i];
    }
    return sum
}

console.log(minSum([5,4,2,3]));         // => 22
console.log(minSum([12,6,10,26,3,24])); // => 342
console.log(minSum([9,2,8,7,5,4,0,6])); // => 74

/*
1. We start by sorting the array in descending order: [5, 4, 3, 2].
2. The loop iterates over the first half of the sorted array (since we're pairing each element with its counterpart from the end).
3. In each iteration of the loop, we compute the product of the current element from the start of the array and its counterpart from the end, and add it to the sum.
    - When i = 0, we have sortArr[i] = 5 and sortArr[sortArr.length - 1 - i] = sortArr[3] = 2, so we add 5 * 2 = 10 to sum.
    - When i = 1, we have sortArr[i] = 4 and sortArr[sortArr.length - 1 - i] = sortArr[2] = 3, so we add 4 * 3 = 12 to sum.

4. After the loop finishes, the sum will contain the sum of all the pair-wise products, which is the minimum sum according to the given problem.

Let's calculate it step by step:
- Pair-wise products: 5*2 + 4*3
- Sum: 10 + 12 = 22

So, the minimum sum obtained from summing each pair of integers' product is 22.
*/
