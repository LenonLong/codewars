/*
How old will I be in 2099? : 
Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this 
so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day 
he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s).
" If the year of birth equals the year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

Good Luck!
*/
function  calculateAge(birth, yearsToCount) {
    let yearsDiff = yearsToCount - birth;
   
   if (birth === yearsToCount) {
    return `You were born this very year!`
   }
   
   if (yearsDiff === 1) {
    return `You are ${yearsDiff} year old.`
   }

   if (yearsDiff === -1) {
    return `You will be born in ${Math.abs(yearsDiff)} year.`
   }

   if (yearsDiff < -1) {
    return `You will be born in ${Math.abs(yearsDiff)} years.`

   } else {
    return `You are ${yearsDiff} years old.`
   }

}
      
  console.log(calculateAge(2012, 2016)); // => "You are 4 years old."
  console.log(calculateAge(1989, 2016)); // => "You are 27 years old."
  console.log(calculateAge(2000, 2090)); // => "You are 90 years old."
  console.log(calculateAge(2000, 1990)); // => "You will be born in 10 years."
  console.log(calculateAge(3400, 3400));  // => "You were born this very year!"
  
    console.log(calculateAge(1388,1389)) // => 'You are 1 year old.'
    console.log(calculateAge(2000, 1999)) // => "You will be born in 1 year."
