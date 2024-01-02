/*
Exclamation marks series #2: Remove all exclamation marks from the end of sentence:
Remove all exclamation marks from the end of sentence.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/
function remove (string) {  
    const regex = /!+$/g;
    return string.replace(regex, '');
  }

    console.log(remove("Hi!"))      // => "Hi"
	console.log(remove("Hi!!!"))    // => "Hi"
	console.log(remove("!Hi"))      // => "!Hi"
	console.log(remove("!Hi!"))     // =>  "!Hi"
	console.log(remove("Hi! Hi!"))  // => "Hi! Hi"
	console.log(remove("Hi"))       // => "Hi"
