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
Input: array of strings 
Output: str 
  - longest common 
  - if no common prefix, return ''

Data structure: obj to store occurrences

Algo:
  - declare a var leadingSubstrings and init to findLeadingSubstrings(array)
  - declare a var count and init {}
  - iterate through leadingSubstrings 
    - for each substring occurence add 1 to its object value

  - if every one the object values is < array.length, return ''

  - turn count into an array of nested array [key, value]
    - sort in descending order the outer array by the value of the inner arrays 
  

  - return count[0][0]

Helper function: findLeadingSubstrings
  - declare a var leadingSubstrings and init []
  - find all leading substrings of each word in the array
    - push each leading substring to leadingSubstrings
*/

// console.log('test')

function longestCommonPrefix(array) {
  let leadingSubstrings = findLeadingSubstrings(array);
  let count = {};

  for (let substring of leadingSubstrings) {
    count[substring] = count[substring] + 1 || 1;
  }

  if (Object.values(count).every(value => value < array.length)) return '';

  let sortedByStrLength = Object.entries(count).sort((a, b) => b[0].length - a[0].length);

  let sortedByCount = sortedByStrLength.sort((a, b) => b[1] - a[1]);
  return sortedByCount[0][0];
}

function findLeadingSubstrings(array) {
  let leadingSubstrings = [];

  for (let arrayIdx = 0; arrayIdx < array.length; arrayIdx++) {
    let string = array[arrayIdx];
    for (let charIdx = 1; charIdx <= string.length; charIdx++) {
      leadingSubstrings.push(string.slice(0, charIdx))
    }
  }

  return leadingSubstrings;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']) === 'fl'); // true
console.log(longestCommonPrefix(['dog', 'racecar', 'car']) === ''); // true
console.log(
  longestCommonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters'
); // true
console.log(longestCommonPrefix(['throne', 'dungeon']) === ''); // true
console.log(longestCommonPrefix(['throne', 'throne']) === 'throne'); // true