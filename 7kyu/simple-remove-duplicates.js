/*
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!
*/
const solve = data => {
    const result = [];
    const seen = new Set();
    
    for (let i = data.length - 1; i >= 0; i--) {
        if(!seen.has(data[i])) {
            result.unshift(data[i])
            seen.add(data[i])
        }
    }
    return result
}


// console.log(solve([3,4,4,3,6,3]),[4,6,3]);
// console.log(solve([1,2,1,2,1,2,3]),[1,2,3]);
// console.log(solve([1,2,3,4]),[1,2,3,4]);
console.log(solve([1,1,4,5,1,2,1]),[4,5,2,1]);
// console.log(solve([1,2,1,2,1,1,3]),[2,1,3]);

/*
1. We initialize an empty array result to store the unique elements.
2. We also initialize a Set called seen to keep track of the elements we've already encountered.
3. We iterate over the input array data in reverse order using a for loop.
4. For each element data[i], we check if it's not in the seen set.
5. If the element is not in the seen set, we add it to the result array using result.unshift() (which adds the element to the beginning of the array).
6. We also add the element to the seen set.
7. After the loop completes, result will contain all the unique elements from data, with the last occurrence of each element preserved.
8. We return result as the final output.

- Time Complexity: O(n), where n is the length of the input array data. We iterate through the array once.
- Space Complexity: O(n), where n is the length of the input array data. In the worst case, all elements are unique, and we need to store them in the result array and the seen set.
*/
