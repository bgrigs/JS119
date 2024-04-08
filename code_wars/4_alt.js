/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Input: string
Output: number

- declare a var = 'aeiou';
- declare a var longest = '';
- declare a var substring = ''


loop through each char of the string
  -if the letter is a vowel, add it to substring. 
  -if the letter is not a vowel, 
    - reassign substring to ''
  - check if substring.length  is longer than longest.length
    - if it is, reassign longest to substring

return longest.length
*/


function solve(str) {
  let vowels = 'aeiou';
  let longest = '';
  let substring = '';

  for (let idx = 0; idx < str.length; idx++) {
    if (vowels.includes(str[idx])) substring += str[idx];
    else {
      substring = '';
    }

    if (substring.length > longest.length) longest = substring;
  }

  return longest.length;
}

console.log(solve("codewarriors"),2);
console.log(solve("suoidea"),3);
console.log(solve("ultrarevolutionariees"),3);
console.log(solve("strengthlessnesses"),1);
console.log(solve("cuboideonavicuare"),2);
console.log(solve("chrononhotonthuooaos"),5);
console.log(solve("iiihoovaeaaaoougjyaw"),8);