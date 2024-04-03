// Problem 9
// Create a function that takes two string arguments and returns the number of times that the second string occurs in the first string. Note that overlapping strings don't count: 'babab' contains 1 instance of 'bab', not 2.

// You may assume that the second argument is never an empty string.

/*
Input: str1, str2
Output: number 

Rules: 
  - overlapping strings don't count...only count each letter once
  - second argument is never empty

decalre a var count = 0

- iterate through str1
  - declare a variable startIndex and init to 0;
  - declare a variable lastIndex and init to 1 (lastIndex will increment by 1 each iteration)

  - if the copy of str1.slice(startIndex, lastIndex) includes str2
    - add 1 to count
    - reassign startIndex to lastIndex
  - if it doesn't include the substring, continue the loop (in which lastIndex is incremented by 1)

- return count 

*/ 

function countSubstrings(str1, str2) {
  let count = 0;
  let startIndex = 0;

  for (let lastIndex = 1; lastIndex <= str1.length; lastIndex++) {
    if (str1.slice(startIndex, lastIndex).includes(str2)) {
      count += 1;
      startIndex = lastIndex;
    }
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