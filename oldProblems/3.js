// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

/*
Input: string
Output: string with:
  - EVERY 4th chracter in every 2nd word converted to uppercase

Algo:
  - split string into an array
  - iterate through arr 
    - if idx % 2 === 1 
      - transform every fouth letter to uppercase
        - split each of these words into an array of characters
          - if we're at index 3, return that char in uppercase
          - else, add 4 to the last index we converted
*/


function toWeirdCase(string) {
  let wordArr = string.split(" ");

  let newArr = wordArr.map((word, idx) => {
    if (idx % 2 === 1) {
      lastConversionIndex = 0;
      return word.split("").map((char, charIndex) => {
        if (charIndex === 3) {
          lastConversionIndex = 3;
          return char.toUpperCase();
        }
        if (charIndex === lastConversionIndex + 4) {
          lastConversionIndex = charIndex;
          return char.toUpperCase();
        }
        return char;
      }).join("");
    }
    return word; 
  });

  return newArr.join(" ");
}

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".