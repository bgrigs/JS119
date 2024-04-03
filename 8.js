// Create a function that takes a non-empty string as an argument. The string consists entirely of lowercase alphabetic characters. The function should return the length of the longest vowel substring. The vowels of interest are "a", "e", "i", "o", and "u".

/*
Input: string (non-empty)
Output: number - length of the longest vowel substring
Rules: string will consist of lowercase alphabetic characters

Algo:
  - declare a var called vowels and init to 'aeiou'
  - declare a var called substrings and init to []
  - declare a var called substring and init to ''

  - iterate through the string 
    - if the letter is a vowel, concat it with substring
      - push substring to substrings

    - if the next letter is not a vowel 
      - reassign substring to '' 

  - sort substrings by element length in descending order
    - return the length of the longest substring
*/

function longestVowelSubstring(string) {
  let vowels = 'aeiou';
  let substrings = [];
  let substring = '';

  for (let letter of string) {
    if (vowels.includes(letter)) {
      substring += letter;
      substrings.push(substring);
    } else substring = '';
  }

  if (substrings.length === 0) return 0;
  return substrings.sort((a, b) => b.length - a.length)[0].length;
}

// ExamplesCopy Code
const p = console.log;
p(longestVowelSubstring('cwm') === 0);
p(longestVowelSubstring('many') === 1);
p(longestVowelSubstring('launchschoolstudents') === 2);
p(longestVowelSubstring('eau') === 3);
p(longestVowelSubstring('beauteous') === 3);
p(longestVowelSubstring('sequoia') === 4);
p(longestVowelSubstring('miaoued') === 5);

