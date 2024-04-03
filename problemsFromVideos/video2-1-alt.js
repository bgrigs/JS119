/*
Given a non-empty string check if it can be constructed by taking a substring
of it and appending multiple copies of the substring together. 

You may assume the given string consists of lowercase English letters only.

Input: string
Output: boolean

Algo: 
  declare a var substring and init to ''

  outer loop will iterate until we reach half the lenght of the string, adding one char to substring during each iteration
    inner loop that iterates as long as variable repeat is less than or equal to string.length
      - init repeat to 1 
      - check if substring.repeat(repeat) is === str
        - if so, return true

  default return value: false 
  
'a'
substring += 'b' // 'ab'
  substring.repeat(1) === 'ab' // false
  substring.repeat(2) === 'abab // true 
*/

function repeatedSubstringPattern(str) {
  let substring = '';

  for (let idx = 0; idx < str.length / 2; idx++) {
    substring += str[idx];
    for (let repeat = 1; repeat <= str.length; repeat++) {
      if (substring.repeat(repeat) === str) return true;
    }
  }

  return false; 
}


console.log(repeatedSubstringPattern('abab') === true); // ab can be repeated 2x
console.log(repeatedSubstringPattern('aba') === false); 
console.log(repeatedSubstringPattern('aabaaba') === false);
console.log(repeatedSubstringPattern('abaababaab') === true); // abaab can be repeated 2x
console.log(repeatedSubstringPattern('abcabcabcabc') === true); // abcabc can be repeated 2x