/*
L1: Bartender, drinks!
Complete the function that receives as input a string, and produces outputs according to the following table:

Input	                    Output
"Jabroni"	                "Patron Tequila"
"School Counselor"	        "Anything with Alcohol"
"Programmer"	            "Hipster Craft Beer"
"Bike Gang Member"	        "Moonshine"
"Politician"	            "Your tax dollars"
"Rapper"	                "Cristal"
anything else	            "Beer"

Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/

function getDrinkByProfession(param){
    let lowerCaseInput = param.toLowerCase();

    let keys = {
        'jabroni'           : 'Patron Tequila',
        'school counselor'  : 'Anything with Alcohol',
        'programmer'        : 'Hipster Craft Beer',
        'bike gang member'  : 'Moonshine',
        'politician'        : 'Your tax dollars',
        'rapper'            : 'Cristal'
    }

    for (key in keys) {
       if (lowerCaseInput === key) {
        return keys[key]
       }
    }
    return 'Beer'
}

console.log(getDrinkByProfession("jabrOni"))            // => "Patron Tequila"
console.log(getDrinkByProfession("scHOOl counselor"))   // =>  "Anything with Alcohol"
console.log(getDrinkByProfession("prOgramMer"))         // => "Hipster Craft Beer"
console.log(getDrinkByProfession("bike ganG member"))   // =>  "Moonshine"
console.log(getDrinkByProfession("poLiTiCian"))         // =>  "Your tax dollars"
console.log(getDrinkByProfession("rapper"))             // =>  "Cristal", "'Rapper'
console.log(getDrinkByProfession("pundit"))             // => "Beer"
