/*
Task:
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)

Example:
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.

Notes:
The numbers are always positive.
The numbers are in the range (1  ≤  a, b, c  ≤  10).
You can use the same operation more than once.
It's not necessary to place all the signs and brackets.
Repetition in numbers may occur .
You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
*/
function expressionMatter(a, b, c) {
    let total1 = (a + b) * c;
    let total2 = a * (b + c);
    let total3 = a * b * c;
    let total4 = a + b + c;

    if (total1 >= total2 && total1 >= total3 && total1 >= total4) {
        return total1;
    } else if (total2 >= total1 && total2 >= total3 && total2 >= total4) {
        return total2
    } else if (total3 >= total1 && total3 >= total2 && total3 >= total4) {
        return total3
    } else {
        return total4
    }
}

console.log(expressionMatter(5, 1, 3), 20);
console.log(expressionMatter(3, 5, 7), 105);
console.log(expressionMatter(5, 6, 1), 35);
console.log(expressionMatter(1, 6, 1), 8);
console.log(expressionMatter(2, 6, 1), 14);
console.log(expressionMatter(6, 7, 1), 48);
console.log(expressionMatter(2, 2, 2), 8);
