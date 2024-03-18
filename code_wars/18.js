// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

/*
Input: string
Outout: string
  - all even indexed characters upper cased
  - all odd indexed chars lower cased

Rules: string will only have letters and spaces

Algo: 
  - split the orig string into an array -- use an empty space as a separator
    - iterate through each word
    - split the word into an array of chars
    - iterate through each char 
    - if the idx of the char is even, make the char upper case
      - else, make the char lower case
      - join the word back together
    - join the string back together and return it

*/

function toWeirdCase(string){
  return string.split(" ").map(word => {
    return word.split("").map((char, idx) => {
      if (idx % 2 === 0) return char.toUpperCase();
      else return char.toLowerCase();
    }).join("");
  }).join(" ");
}

console.log(toWeirdCase('This'), 'ThIs');
console.log(toWeirdCase('is'), 'Is');
console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
 