/*
Given 2 strings, your job is to find out if there is a substring that appears 
in both strings. You will return true if you find a substring that appears in
both strings or false if you do not. We only care about substrings that are longer than one letter/char long

Input: str1, str2 
Output: boolean
  - return true if there is a substring that appears in both strings
  - else false

Rule: substrings must be longer than one char long 
  - implicit rule: case doesn't matter

Algo:
  - if either string has a length of 0, return false 
  - sort strings by length
  - coerce each stirng into lowercase
  - if the longer string includes the shorter string, return true

  otherwise loop through the shorter string
    - take a slice of two characters at a time = substring var
    - if longerString.includes(substring) return true; 

  return false 
*/

function substringTest(str1, str2) {
  if (str1.length === 0 || str2.length === 0) return false; 
  let sorted = [str1, str2].sort((a, b) => a.length - b.length);
  let shorterString = sorted[0].toLowerCase();
  let longerString = sorted[1].toLowerCase();

  if (longerString.includes(shorterString)) return true;

  for (let idx = 0; idx < shorterString.length - 1; idx++) {
    let substring = shorterString.slice(idx, idx + 2);
    if (longerString.includes(substring)) return true;
  }

  return false; 
}

// all should evaluate to true
console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', 'Home') === true);
console.log(substringTest('Something', '') === false);
console.log(substringTest('', 'Something') === false);
console.log(substringTest('', '') === false);
console.log(substringTest('test', 'lllt') === false);
console.log(substringTest('1234567', '541265') === true);
console.log(substringTest('BANANA', 'banana') === true);
console.log(substringTest('Sundayfunday', 'Fun') === true);










