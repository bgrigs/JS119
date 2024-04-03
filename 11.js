// Problem 11
// Create a function that takes a nonempty string as an argument and returns an array consisting of a string and an integer. If we call the string argument s, the string component of the returned array t, and the integer component of the returned array k, then s, t, and k must be related to each other such that s === t * k. The values of t and k should be the shortest possible substring and the largest possible repeat count that satisfies this equation.

// You may assume that the string argument consists entirely of lowercase alphabetic letters.

/*
Input: string (nonempty, all will be lowercase/letters)
Output: array ([string, integer]) ... [t, k]
   - find the shortest possible substring that fits into the original string (s) the most amount of times 
    - the substring x the integer must equal the original string (no letters left out)


Algo:
  - declare a var frequency and init to 1; 
  - declare a var substrings and init to return value of findLeadingSubstrings(string);
  
  - while frequency <= str.length
    - see if each substring x frequency === str 
      - if so, return [substring, frequency]

Helper function findLeadingSubstrings 
  - declare var substrings and init to []
  - iterate through string 
    - declare a var end and init to 1
    - run as long as as end <= string.length
    - push string.slice(0, end)
      
  - return substrings 
x
xy
xyx
xyxy
*/

function repeatedSubstring(string) {
   let substrings = findLeadingSubstrings(string);
   let result;

   for (let index = 0; index < substrings.length; index++) {
    let substring = substrings[index];
    for (let frequency = 1; frequency <= string.length; frequency++) {
      if (substring.repeat(frequency) === string) {
        result = [substring, frequency];
        break;
      }
    }
    if (result) break;
   }

   return result;
}

function findLeadingSubstrings(string) {
  let substrings = [];

  for (let end = 1; end <= string.length; end++) {
    substrings.push(string.slice(0, end));
  }

  return substrings; 
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
p(eq(repeatedSubstring('superduper'), ['superduper', 1]));