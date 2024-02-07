/*
Largest 5 digit number in a series
In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. 
It should return a five digit integer. The number passed may be as large as 1000 digits.
*/
const solution = digits => {
    let largest5 = -Infinity;
    for (let i = 0; i < digits.toString().length - 4; i++) {
        let fiveDigitNumber = parseInt(digits.toString().substr(i, 5));
        
        if (fiveDigitNumber > largest5) {
            largest5 = fiveDigitNumber;
        }
    }
    return largest5
}

console.log(solution(1234567890)) // => 67890 

/*
1. const solution = digits => { ... }: This line defines a function named solution which takes a single parameter digits.

2. let largest5 = -Infinity;: This line initializes a variable largest5 with the value -Infinity. This is used to keep track of the largest 5-digit number encountered so far. 
   -Infinity is used as the initial value because any valid 5-digit number would be greater than this.

3. for (let i = 0; i < digits.toString().length - 4; i++) { ... }: This line starts a loop that iterates over the digits of the input number (digits). The loop runs from i = 0 to i = digits.toString().length - 5. 
   The loop iterates over all possible starting positions for a 5-digit number within the string representation of digits. - 4 is used to ensure that there are at least 5 digits remaining in the string starting from position i.

4. let fiveDigitNumber = parseInt(digits.toString().substr(i, 5));: Inside the loop, this line extracts a substring of 5 characters from the string representation of digits, starting from index i. 
   This substring represents a potential 5-digit number. parseInt() is used to convert this substring back into a numerical value.

5. if (fiveDigitNumber > largest5) { ... }: This line checks if the fiveDigitNumber extracted from the current substring is greater than largest5, the largest 5-digit number encountered so far.

5. largest5 = fiveDigitNumber;: If the current fiveDigitNumber is greater than largest5, then largest5 is updated to hold the value of the current fiveDigitNumber.

7. return largest5: Finally, after the loop completes, the function returns the value of largest5, which would be the largest 5-digit number found in the input series.

  */

/* Alternative Solution:
function solution(digits){
  let answer = 0;
  
  for (let i=0; i<digits.length; i++){
    let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
    if(Number(number) > answer){       //convert to number and compare against answer
      answer = Number(number);
    }
  }
  return answer;
}
*/
