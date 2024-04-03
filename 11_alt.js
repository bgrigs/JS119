// Problem 11
// Create a function that takes a nonempty string as an argument and returns an array consisting of a string and an integer. If we call the string argument s, the string component of the returned array t, and the integer component of the returned array k, then s, t, and k must be related to each other such that s === t * k. The values of t and k should be the shortest possible substring and the largest possible repeat count that satisfies this equation.

// You may assume that the string argument consists entirely of lowercase alphabetic letters.

/*
Input: s (string, not empty, all lowercase)
Output: array = [t, k]
  - shortest possible substring t
  - longest possible repeat count k
    - t may be as short as 1 or as long as s length 
    - k will be a least 1 

Algo:
- declare var subRepeat

- iterate through s while my endingIdx <= s.length 
  - take a slice of s - s.slice(0, endingIdx)
  - inner loop: iterate repeat var from 1 <= s.length. add 1 each time to repeat
    - see if substring.repeat(repeat) === s
      - if so, assign subRepeat to [substring, repeat] and break

- return subRepeat
*/

function repeatedSubstring(string) {
  let subRepeat;

  for (let endingIdx = 1; endingIdx <= string.length; endingIdx++) {
    let substring = string.slice(0, endingIdx);
    for (let repeat = 1; repeat <= string.length; repeat++) {
      if (substring.repeat(repeat) === string) {
        subRepeat = [substring, repeat];
        return subRepeat;
      }
    }
  }

  return null;
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
p(eq(repeatedSubstring('superduper'), ['superduper', 1]));