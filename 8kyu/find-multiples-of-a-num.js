/*
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . 
If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. 
The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
*/

function findMultiples(integer, limit) {
    let multiples = [];

    for (let i = integer; i <= limit; i+= integer) {
        multiples.push(i)
    }
    return multiples
  }
  console.log(findMultiples(5, 25)) // => [5, 10, 15, 20, 25]
  console.log(findMultiples(1, 2)) // =>  [1, 2]
  console.log(findMultiples(5, 7)) // =>  [5]

/*
This function findMultiples takes in two parameters: integer (the base value) and limit (the upper limit). It initializes an empty array called multiples to store the multiples of the given integer.

The for loop starts at the integer value and iterates up to the limit, incrementing by integer each time (i += integer). During each iteration, it pushes the current value of i (which is a multiple of integer) into the multiples array.

Finally, the function returns the array containing all the multiples of the given integer up to the specified limit.
*/
