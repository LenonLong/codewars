/*
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.
*/
const wordsToMarks = (s) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let value = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const charValue = alphabet.indexOf(char) + 1;
        value += charValue
    }
    return value
}
console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);
console.log(wordsToMarks("family"), 66);
console.log(wordsToMarks("selfness"), 99);
console.log(wordsToMarks("knowledge"), 96);
