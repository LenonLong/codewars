/*
Simple Fun #106: Is Thue Morse?
Task:
Given a sequence of 0s and 1s, determine if it is a prefix of Thue-Morse sequence.
The infinite Thue-Morse sequence is obtained by first taking a sequence containing a single 0 and then repeatedly concatenating the current sequence with its binary complement.
A binary complement of a sequence X is a sequence Y of the same length such that the sum of elements X_i and Y_i on the same positions is equal to 1 for each i.

Thus the first few iterations to obtain Thue-Morse sequence are:
0
0 1
0 1 1 0
0 1 1 0 1 0 0 1
...
Examples
For seq=[0, 1, 1, 0, 1], the result should be true.
For seq=[0, 1, 0, 0], the result should be false.

Inputs & Output
[input] integer array seq
A non-empty array.

Constraints:
1 <= seq.length <= 1000
seq[i] ∈ [0,1]
[output] a boolean value
true if it is a prefix of Thue-Morse sequence. false otherwise.
*/
const isThueMorse = (seq) => {
   let thueMorse = [0];

    while (thueMorse.length < seq.length) {
       thueMorse = thueMorse.concat(thueMorse.map(x => 1 - x))
    }
   return seq.every((value, index) => value === thueMorse[index])
}

console.log(isThueMorse([0, 1, 1, 0, 1]),true)
console.log(isThueMorse([0]),true)
console.log(isThueMorse([1]),false)
console.log(isThueMorse([0, 1, 0, 0]),false)


/*
Problem Description:
You are given a sequence of 0s and 1s. You need to determine whether this sequence is a prefix of the Thue-Morse sequence.
What is the Thue-Morse Sequence?:
The Thue-Morse sequence is a binary sequence that starts with 0. Each subsequent step involves taking the previous sequence and appending its binary complement. 
A binary complement of a sequence is a sequence of the same length where each 0 is replaced by 1 and each 1 is replaced by 0.

For example:
Start with 0: 0
Append the binary complement: 01
Append the binary complement of the resulting sequence: 0110
Append the binary complement of the resulting sequence: 01101001
And so on...
*/
