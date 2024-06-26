/*
In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
Rock crushes Scissors
Task:
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".
*/
function rpsls(p1,p2){
   if (p1 === p2) {
    return `Draw!`
   } else if (
        (p1 === 'scissors' && (p2 === 'paper' || p2 === 'lizard')) ||
        (p1 === 'paper' && (p2 === 'rock' || p2 === 'spock')) ||
        (p1 === 'rock' && (p2 === 'lizard' || p2 === 'scissors')) ||
        (p1 === 'lizard' && (p2 === 'spock' || p2 === 'paper')) ||
        (p1 === 'spock' && (p2 === 'scissors' || p2 === 'rock')) 
   ) {
    return 'Player 1 Won!';
   } else {
    return 'Player 2 Won!';
   }
}

console.log(rpsls('rock', 'lizard'), 'Player 1 Won!');
console.log(rpsls('lizard','scissors'), 'Player 2 Won!');
console.log(rpsls('rock', 'rock'), 'Draw!');
