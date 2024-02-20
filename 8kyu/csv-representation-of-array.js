/*
Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values

Note: you shouldn't escape the \n, it should work as a new line.
*/
const toCsvText = arr => {
    return arr.map(row => row.join(',')).join('\n')
}

console.log(toCsvText([
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
   ] ));  // '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34'


/*
1. toCsvText function: This function takes a two-dimensional array arr as input and returns its CSV representation as a string.
2. Mapping over the array:
    - arr.map(row => row.join(',')): This part iterates over each row of the input array (arr). For each row, row.join(',') is applied. join(',') joins the elements of the row array with commas, 
      creating a string representation of the row with comma-separated values.

3. Joining rows with newline characters:
    - .join('\n'): After mapping, we have an array of strings, where each string represents a row of the CSV. We then join these strings using join('\n'). 
       This joins the rows together with newline characters (\n), effectively creating the final CSV string.
   */
