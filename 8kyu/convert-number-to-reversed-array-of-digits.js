/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

const digitize = (n) => {
   return n.toString().split('').map(Number).reverse()
}
console.log(digitize(35231)); // => [1,3,2,5,3]
console.log(digitize(0)); // => [0]

/*
1. n.toString(): This line converts the input number n to a string. For example, if n is 35231, it becomes the string "35231". You can also use String(n)

2. .split(''): This line splits the string into an array of individual characters. The split('') method separates each character in the string and creates an array. 
    So, "35231" becomes ['3', '5', '2', '3', '1'].

3. .map(Number): This line uses the map method to iterate over the array of characters and converts each character back to a number. 
    By using the Number function as the mapping function, it effectively converts each character to its numeric equivalent. 
    After this step, the array becomes [3, 5, 2, 3, 1], with each element as a number.

4. .reverse(): Finally, the reverse method is called on the array. This method reverses the order of elements in the array, so [3, 5, 2, 3, 1] becomes [1, 3, 2, 5, 3].

    So, when you call digitize(35231), it performs all these steps and returns [1, 3, 2, 5, 3], which is an array of the digits of the number 35231 in reverse order.
*/
