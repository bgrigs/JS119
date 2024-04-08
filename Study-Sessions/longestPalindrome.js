// Write a function that finds the longest palindromic substring in a given sentence. A palindromic substring reads the same forwards and backwards. The function should ignore spaces, punctuation, and case. If there are multiple palindromic substrings of the same length, return the first one found.

/*
Input: strings
Output: string
  - longest palindromic substring from the string 
    - return the first longest palindromic substring
    - can be as short as one char 

Rules: ignore spaces, punct, and case

Algo:
- declare a var longest and init to ''

- iterate through the string 
  - declare a var substring and init to ''
  - concat a letter to substring 
  - ignore spaces, do not concat them with substring
  - if isPalindrome(substring) && its longer than longest
    - reassign longest to our substring 


helper function isPalindrome
  - convert everything to lower case
  - using reverse method
    - if the substring is equal to the substring backwards, return true 
*/

function longestPalindromicSubstring(string) {
  let longest = '';
  let spacesRemoved = string.toLowerCase().split(" ").join("");

  for (let idx = 0; idx < spacesRemoved.length; idx++) {
    for (let nextIdx = idx + 1; nextIdx <= spacesRemoved.length; nextIdx++) {
      let substring = spacesRemoved.slice(idx, nextIdx)
      if (isPalindrome(substring) && substring.length > longest.length) {
        longest = substring;
      }
    }
  }

  return longest; 
}

function isPalindrome(substring) {
  return substring === substring.split("").reverse().join("");
}

// // Test cases
console.log(longestPalindromicSubstring("Madam Arora teaches malayalam")); // "malayalam"
console.log(longestPalindromicSubstring("Nurses Run")); // "nursesrun"
console.log(longestPalindromicSubstring("ABC")); // "a"