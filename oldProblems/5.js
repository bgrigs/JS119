// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

/*
In: string
Out: char that occurs the least often in the string
  - if multiple with the same #, return the one that appears 1st
  -consider upper and lowercase to be the same

Data structure: object

Helper Function countOccurrences 
- declare a var called count and init to {}
- iterate through each char in the string
  - if the lowercase version of the char does not yet exist as a key on the obj, set the key to 1
    - else add one to the key
- return the count obj

Turn the obj into a nested array
  - Sort the obj by its values (aka element at index 1) in ascending order
  - Return the first key (element at index 0) 
*/

function leastCommonChar(string) {
  let count = countOccurrences(string);

  let sorted = Object.entries(count).sort((a, b) => a[1] - b[1]);

  return sorted[0][0];
}

function countOccurrences(string) {
  let count = {};

  string.split("").forEach(char => {
    char = char.toLowerCase();
    count[char] = count[char] + 1 || 1;
  })

  return count;
}

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".
