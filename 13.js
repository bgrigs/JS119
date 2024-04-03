// Create a function that takes two strings as arguments and returns true if some portion of the characters in the first string can be rearranged to match the characters in the second. Otherwise, the function should return false.

// You may assume that both string arguments only contain lowercase alphabetic characters. Neither string will be empty.

/*
Input: str1, str2
Output: boolean 
  - return if the characters of the first string can be rearranged to match the characters in the second
    - there may extra letters in the first
    - i.e. str1 must include all of str2 , but not vice versa

Data structure: object

b: 1
o: 1
l: 1
d: 1
f: 1
a: 1
c: 1
e: 1

c: 1
o: 1
a: 1
l: 1

Algo: 
  - iterate through letterCountStr2
    - for each key in that obj, check if value in letterCountStr1 is greater OR equal to letterCountStr2's value 

Helper function
  - create an object that stores the count of each char in str1 - letterCountStr1
  - create an object that stores the count of each char in str2  - letterCountStr2
*/

function unscramble(str1, str2) {
  let letterCountStr1 = countLetters(str1);
  let letterCountStr2 = countLetters(str2);

  return Object.keys(letterCountStr2).every(letter => {
    return letterCountStr1[letter] >= letterCountStr2[letter];
  });
}

function countLetters(str) {
  return str.split("").reduce((accum, char) => {
    accum[char] = accum[char] + 1 || 1; 
    return accum;
  }, {});
}

const p = console.log;
p(unscramble('ansucchlohlo', 'launchschool') === true);
p(unscramble('phyarunstole', 'pythonrules') === true);
p(unscramble('phyarunstola', 'pythonrules') === false);
p(unscramble('boldface', 'coal') === true);
// The above tests should each print true.