/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/
function factorial(n){
    if (n <= 0) return 1;

    return n * factorial(n - 1)
  }

console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(4), 24);
console.log(factorial(7), 5040);
