/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); 
you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

const dnaStrand = dna => {
    let result = '';
    // Define an object 'strand' that maps each DNA base to its complement
    const strand = {
        'A' : 'T',
        'C' : 'G',
        'T' : 'A',
        'G' : 'C'
    }
     // Iterate through each character in the input 'dna' string
   for (let i = 0; i < dna.length; i++) {
    // Get the current DNA base at the current position in the string
    const currentBase = dna[i];
    // Use the strand object to find the complement for the current base
    const complement = strand[currentBase]
    // Append the complement to the result string
    result += complement
   }
   return result
}

console.log(dnaStrand("AAAA"))   // => "TTTT"
console.log(dnaStrand("ATTGC"))  // => "TAACG"
console.log(dnaStrand("GTAT"))   // => "CATA"
