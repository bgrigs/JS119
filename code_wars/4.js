/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Input: string of letters, no spaces
Output: number
  - representing the longest vowel substring

codewarriors
- if substring.length > longestSubstring, reassign longestSubstring length to substring.length


Algo: 
  - create a var vowels, init to 'aeiou'
  - create a var substring, init to ""
  - create a var longestSubstringLength, init to 0 

  - iterate over each letter
    - if letter is a vowel, add it to the substring
    - if substring.length > longestSubstring, reassign longestSubstring length to substring.length
    - if letter is not a vowel, reassign substring to ""
*/


function solve(string){
  let vowels = 'aeiou';
  let substring = "";
  let longestSubstringLength = 0;

  for (let idx = 0; idx < string.length; idx++) {
    let letter = string[idx];
    if (vowels.includes(letter)) {
      substring += letter;
    } else {
      substring = '';
    }

    if (substring.length > longestSubstringLength) longestSubstringLength = substring.length;
  }

  return longestSubstringLength;
 }

console.log(solve("codewarriors"),2);
console.log(solve("suoidea"),3);
console.log(solve("ultrarevolutionariees"),3);
console.log(solve("strengthlessnesses"),1);
console.log(solve("cuboideonavicuare"),2);
console.log(solve("chrononhotonthuooaos"),5);
console.log(solve("iiihoovaeaaaoougjyaw"),8);