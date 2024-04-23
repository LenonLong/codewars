/*
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
For example, the score of abad is 8 (1 + 2 + 1 + 4).
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/
const high = str => {
    const words = str.split(' ');
    
    let highestScore = 0;
    let highestWord = '';

    for (const word of words) {
        const score = calculateScore(word);
        if (score > highestScore) {
            highestScore = score;
            highestWord = word;
        }
    }
    return highestWord
}

const calculateScore = word => {
    let score = 0; 
    for (const char of word) {
        score += char.charCodeAt(0) - 96; // 'a' has char code 97, so subtracting 96 gives the position in the alphabet
    }
    return score;
}


console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano'); 
console.log(high('take me to semynak'), 'semynak');   
console.log(high('aa b'), 'aa');
console.log(high('b aa'), 'b');
console.log(high('bb d'), 'bb');
console.log(high('d bb'), 'd');
console.log(high('aaa b'), 'aaa');

/*
Splitting the String into Words: const words = str.split(' '); This line splits the input string str into an array of words using the space character ' ' as the separator. Each element of the array represents a word from the original string.
Initializing Variables: let highestScore = 0;
                        let highestWord = ''; These lines initialize two variables: highestScore to store the highest score seen so far and highestWord to store the corresponding word.
Iterating through Words: This loop iterates through each word in the array of words.
Calculating Word Score: const score = calculateScore(word); For each word, it calculates its score by calling the calculateScore function, passing the word as an argument.

Updating Highest Score and Word: 
if (score > highestScore) {
    highestScore = score;
    highestWord = word;
} If the score of the current word is greater than the highestScore seen so far, it updates highestScore to the current score and highestWord to the current word.

Calculating Word Score Function: This function takes a word as input, iterates through each character of the word, calculates its score based on its position in the alphabet, and returns the total score of the word.
*/
