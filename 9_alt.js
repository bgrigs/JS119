// Problem 9
// Create a function that takes two string arguments and returns the number of times that the second string occurs in the first string. Note that overlapping strings don't count: 'babab' contains 1 instance of 'bab', not 2.

// You may assume that the second argument is never an empty string.

/*
Input: str1, str2
Output: number of x's str2 appears in str1

Algo:

- declare a var count and init to 0
- let startingIdx = 0
- length = str2.length


- iterate through str1 
  - init endingIdx to startingIdx + length 
  - declare a var substring and init to str1.slice(starttingIdx, endingIdx)
  - check if substring includes string 2
    - if so, count += 1;
    - startingIdx = endingIdx;
  

- return count
*/ 

function countSubstrings(str1, str2) {
  let count = 0;
  let length = str2.length;
  let startingIdx = 0;

  for (let endingIdx = startingIdx + length; endingIdx <= str1.length;) {
    let substring = str1.slice(startingIdx, endingIdx);
    if (substring.includes(str2)) {
      count += 1;
      startingIdx = endingIdx;
      endingIdx += length;
    } else endingIdx += 1;
  }


  return count; 
}

const p = console.log;
p(countSubstrings('babab', 'bab') === 1);
p(countSubstrings('babab', 'ba') === 2);
p(countSubstrings('babab', 'b') === 3);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('', 'x') === 0);
p(countSubstrings('bbbaabbbbaab', 'baab') === 2);
p(countSubstrings('bbbaabbbbaab', 'bbaab') === 2);
p(countSubstrings('bbbaabbbbaabb', 'bbbaabb') === 1);