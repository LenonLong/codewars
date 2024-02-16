/*
Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.
    - Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
    - Each part will be in a string
    - Elements of a pair must be in the same order as in the original array.

Examples of returns in different languages:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
or
 a = {"az", "toto", "picaro", "zone", "kiwi"} -->
{{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or 
a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
"(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"
*/

function partlist(arr) {
   let result = [];
   for (let i = 1; i < arr.length; i++) {
    const firstPair = arr.slice(0, i).join(' ')
    const secondPair = arr.slice(i).join(' ')
    result.push([firstPair, secondPair])
   }
   return result
}

console.log(partlist(["I", "wish", "I", "hadn't", "come"])) // => [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]
console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"])) // => [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]

/*
1. Inside the function, we initialize an empty array result to store the pairs of strings representing the divisions of the input array.
2. We then loop through the input array starting from index 1 (since we want to have at least one element in the first part and one element in the second part).

3. For each iteration of the loop, we split the input array into two parts at the current index i. The slice method is used to extract elements from the array. 
   arr.slice(0, i) extracts elements from index 0 up to (but not including) index i, and arr.slice(i) extracts elements from index i to the end of the array.

4. We join the elements of each part into a string using the join method with a space separator. This creates a string representation of each part.
5. We push a pair (or array) of strings representing the two parts into the result array. Each pair contains the first part and the second part.
6. After iterating through all possible divisions of the input array, we return the result array containing all pairs of strings representing the divisions of the array into two non-empty parts.
*/
