/*
Given a non-empty string check if it can be constructed by taking a substring
of it and appending multiple copies of the substring together. 

You may assume the given string consists of lowercase English letters only.

Input: string
Output: boolean

Algo: 
  - declare a var substrings and init to leadingSubstrings(str)

  - create a loop with a var called repeat init to 2. add 1 to repeat as long as repeat <= str.length 
    - create an inner loop that iterates through the substrings
      - see if the substring x repeat === str. if so, return true 

  - default return value: false 

Helper function leadingSubstrings(str)
  - find leading substrings 
    - stop one char early so that something like 'aba'.repeat(1) doesn't return true
*/

function repeatedSubstringPattern(str) {
  let substrings = leadingSubstrings(str);
  // console.log(substrings);

  for (let idx = 0; idx < substrings.length; idx++) {
    let substring = substrings[idx];
    for (let repeat = 2; repeat <= str.length; repeat++) {
      if (substring.repeat(repeat) === str) return true;
    }
  }

  return false; 
}

function leadingSubstrings(str) {
  let substrings = [];
  for (let idx = 1; idx < str.length; idx++) {
    substrings.push(str.slice(0, idx));
  }

  return substrings;
}

console.log(repeatedSubstringPattern('abab') === true); // ab can be repeated 2x
console.log(repeatedSubstringPattern('aba') === false); 
console.log(repeatedSubstringPattern('aabaaba') === false);
console.log(repeatedSubstringPattern('abaababaab') === true); // abaab can be repeated 2x
console.log(repeatedSubstringPattern('abcabcabcabc') === true); // abcabc can be repeated 2x