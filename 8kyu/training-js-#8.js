/*
In JavaScript, switch can replace multiple if statements.

switch(n){
  case 1:  
    //code block
    break;
  case 2:
    //code block
    break;
  case ...:
    //code block
    break;

  default:       //default is optional, sometimes it can be omitted
    //code block
                 //The last one does not need break
}
switch is the keyword and n is the variable to switch. case 1 means when n===1. Following the ":" you can add your code for what to do in that case. The keyword break is used as termination - if you forget break, 
the code will continue running through the other case statements and default until a break appears. If no case statements match, default is entered.
In some instances, the switch statement is clearer than the if..else statement.

Task:
Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. 
Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.
*/
function howManydays(month){
    var days;

    switch (month) {
        case 1: // January
        case 3: // March
        case 5: // May
        case 7: // July
        case 8: // August
        case 10: // October
        case 12: // December
            days = 31;
            break;
        case 4: // April
        case 6: // June
        case 9: // September
        case 11: // November
            days = 30;
            break;
        case 2: // February
            days = 28; // Assuming non-leap year
            break;
        
    }

    return days;
  }

  console.log(howManydays(1),31);
  console.log(howManydays(2),28);
  console.log(howManydays(3),31);
  console.log(howManydays(4),30);
  console.log(howManydays(12),31);
