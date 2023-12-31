/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/
// const disemvowel= (str) => {
//     const vowels = 'aeiouAEIOU';

//     let splitStr = str.split('');

//     const filteredChars  = splitStr.filter(char => (!vowels.includes(char)));
    
//     return filteredChars.join('')
// }

// Alternative Solution

const disemvowel = (str) => {
    const vowels = 'aeiouAEIOU';
    const splitStr = str.split('');
    let newStr = ''

    for (let i = 0; i < splitStr.length; i++) {
        let char = splitStr[i];

        if (!vowels.includes(char)) {
            newStr += char;
        }
    }
    return newStr;
}

console.log(disemvowel("This website is for losers LOL!")) // => "Ths wbst s fr lsrs LL!"
// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")) //  "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
// console.log(disemvowel("What are you, a communist?")) // =>  "Wht r y,  cmmnst?"
