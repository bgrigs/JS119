// Write a function that finds the longest palindromic substring in a given sentence. A palindromic substring reads the same forwards and backwards. The function should ignore spaces, punctuation, and case. If there are multiple palindromic substrings of the same length, return the first one found.

/*
Input: string
Output: string 

declare a var spacesRemoved and init to str.toLowerCase() with spaces removed
declare a var longest = ''

loop through spacesRemoved 
  - outer loop will grab the firstIdx
    - inner loop will grab the cutoff idx ...this needs to loop until endIdx <= str.length 
    - declare a var substring and init to str.slice(firstIdx, endIdx);
    - if the substring is a palindrome AND it substring.length > longest.length
      - reassign lognest to substring


return longest;
*/

function longestPalindromicSubstring(str) {
  let spacesRemoved = str.toLowerCase().split(" ").join("");
  let longest = '';
  
  for (let firstIdx = 0; firstIdx < spacesRemoved.length; firstIdx++) {
    for (let endIdx = firstIdx + 1; endIdx <= str.length; endIdx++) {
      let substring = spacesRemoved.slice(firstIdx, endIdx);
      if (substring === substring.split("").reverse().join("") &&
        substring.length > longest.length) {
          longest = substring;
      }
    }
  }

  return longest;
}

// // Test cases
console.log(longestPalindromicSubstring("Madam Arora teaches malayalam")); // "malayalam"
console.log(longestPalindromicSubstring("Nurses Run")); // "nursesrun"
console.log(longestPalindromicSubstring("ABC")); // "a"