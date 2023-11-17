/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
    const ageDifference = Math.abs(dadYearsOld - (sonYearsOld * 2))

    return ageDifference
  }

  console.log(twiceAsOld(36,7) , 22);
  console.log(twiceAsOld(55,30) , 5);

  /*
  This function takes the current age of the father and son as arguments and calculates the age difference when the father was or will be twice as old as his son. 
  The Math.abs() function ensures that the result is always a positive number, indicating the number of years ago or in the future when this condition was or will be met.
  */
