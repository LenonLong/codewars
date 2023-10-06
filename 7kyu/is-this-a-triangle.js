/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/
function isTriangle(a,b,c) {
     // Check if all sides are greater than zero
   if (a > 0 && b > 0 && c > 0) {
    // Check the triangle inequality theorem for all combinations of sides
    if (a + b > c && b + c > a && a + c > b) {
        return true;
    }
   }
   return false;
}
console.log(isTriangle(1,2,2)); //=> true
console.log(isTriangle(7,2,2)); //=> false
