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
 
*/

// console.log('test')

function longestCommonPrefix(array) {
  let shortestWord = array.sort((a, b) => a.length - b.length)[0];
  let longest = '';
  let temp = '';

  for (let char of shortestWord) {
    temp += char;
    if (array.slice(1).every(word => {
      return word.slice(0, temp.length).includes(temp);
    })) {
      if (temp.length > longest.length) longest = temp;
    }
  }

  return longest;
}



console.log(longestCommonPrefix(['flower', 'flow', 'flight']) === 'fl'); // true
console.log(longestCommonPrefix(['dog', 'racecar', 'car']) === ''); // true
console.log(
  longestCommonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters'
); // true
console.log(longestCommonPrefix(['throne', 'dungeon']) === ''); // true
console.log(longestCommonPrefix(['throne', 'throne']) === 'throne'); // true