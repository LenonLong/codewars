/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rps = (p1, p2) => {

   if (p1.includes('rock') && p2.includes('scissors')) {
    return `Player 1 won!`
   } else if (p1.includes('scissors') && p2.includes('paper')) {
    return `Player 1 won!`
   } else if (p1.includes('paper') && p2.includes('rock')) {
    return `Player 1 won!`
   } else if ((p1.includes('rock') && p2.includes('rock')) || p1.includes('paper') && p2.includes('paper') || p1.includes('scissors') && p2.includes('scissors')) {
    return `Draw!`
   } else {
    return `Player 2 won!`
   }
}

console.log(rps('rock', 'scissors')) // => Player 1 won!
console.log(rps('scissors', 'rock')) // => Player 2 won!
console.log((rps('rock', 'rock'))) // => Draw!
console.log(rps('paper', 'paper')) // => Draw!
