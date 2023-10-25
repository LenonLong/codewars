/*
Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/
String.prototype.isUpperCase = function() {
   return this.toString() === this.toUpperCase();
  }
  console.log('C'.isUpperCase()); // true, 'C is upper case'
  console.log('c'.isUpperCase()); // false, 'c is not upper case'
  console.log('HELLO'.isUpperCase()); // true, 'HELLO is upper case'
  console.log('Hello'.isUpperCase()); // false, 'Hello is not upper case'

/*
1. String.prototype.isUpperCase = function() { ... }: This line adds a new method called isUpperCase to the String prototype. 
   This means that you can now call this method on any string object, and it will be available for all strings in your code.

2. return this.toString() === this.toUpperCase();: This is the implementation of the isUpperCase method. Here's how it works:
    - this.toString(): this refers to the string on which the isUpperCase method is called. toString() is used to ensure that 
      the string is treated as a string, regardless of its original type.

    - this.toUpperCase(): This method is used to convert the string to uppercase. For example, if the original string is 
      "Hello," this.toUpperCase() will make it "HELLO."

    - this.toString() === this.toUpperCase(): This condition checks if the original string (in lowercase) is equal to the string in uppercase. 
      If they are the same, it means the string was already in uppercase, and the method returns true. Otherwise, it returns false, indicating that the string is not in ALL CAPS.
*/
