/*
/*
Highest Rank Number in an Array:
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

const highestRank = (arr) => {
    let map = {};
    let count = 0;
    let highestNum = 0;

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        map[num] = (map[num] || 0) + 1;
       
        if (map[num] > count) {
            count = map[num];
            highestNum = num;
        } else if (map[num] === count && num > highestNum) {
            highestNum = num;
        }
    }
   return highestNum;
}
let arr = [12, 10, 8, 12, 7, 10, 4, 10, 12]; // 12 appears three times
console.log(highestRank(arr)); // 12

// let arr2 = [7,16,29,10,10,10,5,19,3,28,10] // 10 appears four times
// console.log(highestRank(arr2)) // 10

/*
1. map is initialized as an empty object. This object will be used to store the count of each unique number in the array.
2. count is initialized to 0. This variable will keep track of the highest frequency found so far.
3. highestNum is initialized to 0. This variable will store the number with the highest frequency found so far.
4. The code iterates through the array using a for loop.
5. For each element in the array, it checks if it exists in the map object. If it doesn't exist, it initializes its count to 1. If it does exist, it increments its count by 1.
6. After updating the count for the current number, it checks if the count for this number is greater than the current count. If it is, it updates count and highestNum to the count and the current number respectively.
7. If the count for the current number is equal to count, it checks if the current number is greater than highestNum. If it is, it updates highestNum to the current number. 
   This step ensures that if there are multiple numbers with the same highest frequency, the highest number among them is considered.
8. Finally, it returns highestNum, which is the number with the highest frequency in the array.
*/
