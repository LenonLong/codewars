/*
Sorted? yes? no? how? :

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/
function isSortedAndHow(array) {
   let ascending = true;
   let descending = true; 

   for (let i = 0; i < array.length -1; i++) {
    if (array[i] > array[i + 1]) {
        ascending = false;
    } else if (array[i] < array[i + 1]) {
        descending = false;
    }
   }

   if (ascending) {
    return `yes, ascending`;
   } else if (descending) {
    return `yes, descending`;
   } else {
    return `no`;
   }
}
console.log(isSortedAndHow([1, 2]));            // => 'yes, ascending'
console.log(isSortedAndHow([15, 7, 3, -8]));    // => 'yes, descending'
console.log(isSortedAndHow([4, 2, 30]));        // => 'no'
/*
1. Initialization: 
- The function initializes two boolean variables, ascending and descending, as true. These variables will be used to track if the array is sorted in ascending or descending order.

2. Loop through the array: The function uses a for loop to iterate through the array, comparing each element to the next one to determine the order.
- If an element is greater than the next element (array[i] > array[i + 1]), it means the array is not in ascending order, so ascending is set to false.
- If an element is less than the next element (array[i] < array[i + 1]), it means the array is not in descending order, so descending is set to false.

3. Check the status of ascending and descending: After the loop, the function checks the values of the ascending and descending variables to determine the sorted order.
- If ascending is still true and descending is false, it means the array is sorted in ascending order.
- If descending is still true and ascending is false, it means the array is sorted in descending order.
- If both ascending and descending are false, it means the array is neither sorted in ascending nor descending order.

4. Return the result: Depending on the determined order, the function returns 'yes, ascending', 'yes, descending', or 'no' accordingly.
*/


/* // Alternative :

const isSortedAndHow = array => {
    const s = array.join('')
    
    return s === array.sort((a, b) => a - b).join('') ? `yes, ascending` :
           s === array.sort((a, b) => b - a).join('') ? `yes, descending` : `no`
}
*/
