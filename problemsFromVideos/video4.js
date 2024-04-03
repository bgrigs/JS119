// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
  

// strs[i] consists of only lowercase English letters.

/*
Input: an array of strings
Output: string
  - longest common prefix among ALL strings 
  - if no common prefix, return ''

Algo:
  - declare a var sortedByLength and init to strings sorted by length (ascending)
  - declare a var shortest and init to sortedByLength[0]
  - declare a var longest and init ''
  - declare a var substring and init to ''
  
  - iterate through each char of shortest
    - concat substring with char
    - if every word in sortedByLength.slice(1) starts with substring && substring.length is > longest.length,
      - reassing lognest to substring

  - return longest
*/

function commonPrefix(array) {
  let sortedByLength = array.sort((a,b) => a.length - b.length);
  let shortest = sortedByLength[0];
  let longest = '';
  let substring = '';

  for (let char of shortest) {
    substring += char;
    if (array.slice(1).every(word => word.startsWith(substring)) &&
      substring.length > longest.length) longest = substring;
  }

  return longest;
}


// Test Cases
console.log(commonPrefix(['flower', 'flow', 'flight']) === 'fl'); // true
console.log(commonPrefix(['dog', 'racecar', 'car']) === ''); // true
console.log(
  commonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters'
); // true
console.log(commonPrefix(['throne', 'dungeon']) === ''); // true
console.log(commonPrefix(['throne', 'throne']) === 'throne'); // true