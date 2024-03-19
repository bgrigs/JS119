// Create a function that takes a string argument and returns a copy of the string with every second character in every third word converted to uppercase. Other characters should remain the same.

/*
Input: string
Output: string
  - every 2nd char of every 3rd word converted to uppercase

Split the string into an array of words
  - add an empty space as an element to the very beginning of this array

Iterate through the array (map)
  - if the idx of the array is evenly divisibly by 3, modify every 2nd letter to uppercase
    - (if char idx is not evenly divisible by 2, modify the char)
  - place the modified words in a new array, join the array together and return it

*/

function toWeirdCase(string) {
  let array = string.split(" ");
  array.unshift('');

  let newString = array.map((word, idx) => {
    if (idx % 3 !== 0) return word;
    return word.split("").map((char, idx) => {
      if (idx % 2 !== 0) return char.toUpperCase();
      return char;
    }).join("");
  }).join(" ");

  return newString.trimStart();
}

// Examples
let p = console.log;
let original = 'Lorem Ipsum is simply dummy text of the printing world';
let expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world';
p(toWeirdCase(original) === expected);

original = 'It is a long established fact that a reader will be distracted';
expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD';
p(toWeirdCase(original) === expected);

p(toWeirdCase('aaA bB c') === 'aaA bB c');

original = "Mary Poppins' favorite word is " +
           "supercalifragilisticexpialidocious";
expected = "Mary Poppins' fAvOrItE word is " +
           "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS"
p(toWeirdCase(original) === expected);
// The above tests should each print true.
