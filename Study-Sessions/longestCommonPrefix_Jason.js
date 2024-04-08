console.log(longestCommonPrefix(["flower","flow","flight"])); //fl
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""


function longestCommonPrefix(strs) {
  let init = strs[0];

  for(let i = 1; i < strs.length; i++) {
    let temp = '';
    for(let j = 0; j < strs[i].length && j < init.length; j++) {
     
      if(init[j] !== strs[i][j]) break;
      // console.log(init[j])
      temp += init[j]
     // console.log(temp)
    }
    init = temp;
    if(init === '') return '';
  }
  return init 
}

// For each string in the array (starting from the second string, since we used the first string as the initial prefix candidate):
// Initialize a temporary variable to store the common prefix for this iteration.
// Iterate over each character of the current string and the prefix candidate simultaneously.
// Compare characters at the current position in both the prefix candidate and the current string.
// If the characters match, append this character to the temporary prefix variable.
// If they don't match or if we reach the end of either the prefix candidate or the current string, stop the iteration for this string
// Update the prefix candidate with the temporary prefix found in this iteration
// If at any point the prefix candidate becomes an empty string, return an empty string immediately, as it means there's no common prefix