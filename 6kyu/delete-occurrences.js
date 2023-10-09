/*
Delete occurrences of an element if it occurs more than n times :

Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. 
However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. 
Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/
function deleteNth(arr,n){
    let result = []
    let numCount = {};

    for (const num of arr) {
      if(!numCount[num]) {
        numCount[num] = 1;
        result.push(num);
       
        
      } else if (numCount[num] < n) {
        numCount[num]++;
        result.push(num);
      }
    }
    return result;
}

console.log(deleteNth([20,37,20,21], 1)) // => , [20,37,21]
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)) // =>  [1, 1, 3, 3, 7, 2, 2, 2]

/*
1. We define the deleteNth function that takes two arguments: arr (the input list) and n (the maximum repetition count).

2. We create an empty array result to store the filtered list and an empty object numCount to keep track of the count of each number.

3. We iterate through the input list using a for...of loop.

4. For each number in the input list, we check whether it exists in the numCount object. If it doesn't exist, we initialize its count to 1 and add it to the result. 
   If it does exist and its count is less than n, we increment its count and add it to the result.

5. We continue this process for all numbers in the input list, ensuring that each number is added to the result at most n times.

6. Finally, we return the result array, which contains the filtered list according to the specified constraints.
*/
