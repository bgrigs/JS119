// Problem 5
// Create a function that takes a string argument and returns the character that occurs most often in the string. If there are multiple characters with the same greatest frequency, return the one that appears first in the string. When counting characters, consider uppercase and lowercase versions to be the same.

/*
Input: string
Output: string (character)
*/

function mostCommonChar(string) {
  let count = {};
  for (let char of string) {
    char = char.toLowerCase();
    count[char] = count[char] + 1 || 1;
  }

  return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
}

const p = console.log;
p(mostCommonChar('Hello World') === 'l');
p(mostCommonChar('Mississippi') === 'i');
p(mostCommonChar('Happy birthday!') === 'h');
p(mostCommonChar('aaaaaAAAA') === 'a');

let myStr = 'Peter Piper picked a peck of pickled peppers.';
p(mostCommonChar(myStr) === 'p');

myStr = 'Peter Piper repicked a peck of repickled peppers. He did!';
p(mostCommonChar(myStr) === 'e');
// The above tests should each print true.