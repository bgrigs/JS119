// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

/*
Input: string
Output: boolean
  - true if the string is a pangram (contains every letter for the alphabet at least once)
  - false if the string is not a pangram

CASE IS IRRELEVANT

Data structure: object that contains all of the letters as keys, values are # of occurrences

Algo: 
  - declare a var letters and initialize to 'abcde....'
  - declare a var called lettersCount and initialize to an empty object
  - iterate through letters
    - for each letter, place a key with that letter into lettersCount with the value 0

  - iterate through each char of the string
    - if the char is present as a key in lettersCount
      - add one to lettersCount[char]

  - iterate through each value of lettersCount.
     - if every value is greater than 0, return true
    - else false

*/


function isPangram(string){
  let lettersCount = makeLettersObj();

  string.split("").forEach(char => {
    let letter = char.toLowerCase();
    if (Object.keys(lettersCount).includes(letter)) lettersCount[letter] += 1;
  })

  return Object.values(lettersCount).every(count => count > 0);
}

function makeLettersObj() {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let lettersCount = {};

  letters.split("").forEach(letter => lettersCount[letter] = 0);

  return lettersCount;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."), true)
console.log(isPangram("This is not a pangram."), false);