// Problem 12
// Create a function that takes a string as an argument and returns true if the string is a pangram, false if it is not.

// Pangrams are sentences that contain every letter of the alphabet at least once. For example, the sentence "Five quacking zephyrs jolt my wax bed." is a pangram since it uses every letter at least once. Note that case is irrelevant.

/*
Input: string
Output: boolean (true if the string is a pangram)

Rules: 
  - case is irrelevant
  - letter can be present more than once but must be present at least once

Data structure: object that letters a-z as keys with an initial value of 0 for each key

Algo: 
  - declare a var letterCount = makeAlphabetObject();

  - iterate through the string 
    - if letterCount includes that char
      - for each letter (make lowercase), add 1 to the key-value pair in the letterCount object

  - if every value of letterCount obj is > 1, return true

Helper function makeAlphabetObject
  - declare a var alphabet and init to 'abcd...'
  - declare a var letterCount and init to {}
  - iterate through the alphabet string so that each letter is present as a key 
    - give a value of 0 for each key

  - return an object 
*/

function isPangram(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let letterCount = makeAlphabetObject(alphabet);

  for (let char of string) {
    char = char.toLowerCase();
    if (alphabet.includes(char)) letterCount[char] += 1;
  }

  return Object.values(letterCount).every(count => count >= 1);
}

function makeAlphabetObject(alphabet) {
  let letterCount = {};

  for (let letter of alphabet) {
    letterCount[letter] = 0;
  }

  return letterCount;
}


const p = console.log;
p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
p(isPangram("A wizard's job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard's task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard's job is to vex chumps quickly in golf.") === true);

let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
p(isPangram(myStr) === true);
// tests should all return true 