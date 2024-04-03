/* Write a function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise return false.

For ex: 
str1 is 'rkqodlw' and str2 is 'world' the output shoudl return true
str1 is 'katas' and str2 is 'steak' should return false

only lower case letters will be used (a-z). No punct or digits

Input: str1, str1
Output: boolean value

Data structure: object 

Algo: 
  - declare a var str1LetterCount and init to countLetters(str1)
  - declare a var str2LetterCount and init countLetters(str2)

Iterate through they keys of str2LetterCount 
  - if str2LetterCount[key] > str2LetterCount[key] return false

default return value true

Helper function countLetters 
  - iterate through the string
    - each char will be a key on the obj
    - each value will be the count 
*/

function scramble(str1, str2) {
  if (str1.length < str2.length) return false;
  let str1LetterCount = countLetters(str1);
  let str2LetterCount = countLetters(str2);

  for (let char in str2LetterCount) {
    if (str1LetterCount[char] === undefined || 
      str2LetterCount[char] > str1LetterCount[char]) return false;
  }

  return true; 
}

function countLetters(str) {
  return str.split("").reduce((obj, char) => {
    obj[char] = obj[char] + 1 || 1;
    return obj;
  }, {});
}

console.log(scramble('javaass', 'jiss') === false);
console.log(scramble('rkqodlw', 'world') === true);
console.log(scramble('cedewaraaossoqqyt', 'codewars') === true);
console.log(scramble('katas', 'steak') === false);
console.log(scramble('scriptjava', 'javascript') === true);
console.log(scramble('scriptingjava', 'javascript') === true);



