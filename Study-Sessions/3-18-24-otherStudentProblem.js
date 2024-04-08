// Given two words, how many letters do you have to remove from them to make them anagrams?
// Example
// First word: codewars (4 letters removed)
// Second word: hackerrank (6 letters removed)
// Result: 10

// A word is an anagram of another word if they have the same letters.
// Do not worry about case. All inputs will be lowercase.

/*
Input: str1, str2
Output: number 

Data structure: obj

optional: guard clause that returns the length of the other str if one of the strings is empty 

declare a var numLettersToRemove = 0

- create an object for each str that represents the count of the chars

- iterate over obj1 
  - if the key is present in both obj1 and 2, add the difference to numLettersToRemove
  - if the key is not present in obj2, add whatever value is in that key to numLettersToRemove

- iterate ober obj2
  - if the key is not present in obj1, add whatever value is in that key to numLettersToRemove
*/

function anagramDifference(str1, str2) {
  let obj1 = countLetters(str1);
  let obj2 = countLetters(str2);

  let lettersToRemove = 0;

  for (let key in obj1) {
    if (!Object.keys(obj2).includes(key)) lettersToRemove += obj1[key];
    else lettersToRemove += Math.abs(obj2[key] - obj1[key]);
  }

  for (let key in obj2) {
    if (!Object.keys(obj1).includes(key)) lettersToRemove += obj2[key];
  }

  return lettersToRemove;
}

function countLetters(str) {
  let obj = {};
  for (let letter of str) {
    obj[letter] = obj[letter] + 1 || 1;
  }

  return obj;
}


console.log(anagramDifference("",""));      // 0
console.log(anagramDifference("a",""));     // 1
console.log(anagramDifference("", "a"));    // 1
console.log(anagramDifference("ab","a"));   // 1
console.log(anagramDifference("ab","cd"));  // 4
console.log(anagramDifference("aab","a"));  // 2
console.log(anagramDifference("a","aab"));  // 2
console.log(anagramDifference("codewars","hackerrank")); // 10
