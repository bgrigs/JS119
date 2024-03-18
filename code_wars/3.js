/*Complete the solution so that it returns the number of times the search_text is found within the full_text. Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

Usage example:

full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
    ---> should return 2 since "bb" shows up twice


full_text = "aaabbbcccc", search_text = "bbb"
    ---> should return 1


Input: two strings
Output: how many times the 2nd string shows up in the first string

Algo
  - create a var count and init to 0
  - create a var called searchTextLength and init to searchText.length
  - create a var called fullTextLength and init to fullText.length


  - turn fullTexxt into an array and use searchText as the separator
    - joing the array back into a string and init to a var called newString
  - create a var called newStringLength...init to length

  - subtract newStringLength from fullText.length and divide by searchText.length. return this #
*/


// function solution(fullText, searchText){
//   let fullTextLength = fullText.length
//   let searchTextLength = searchText.length;

//   let newString = fullText.split(searchText).join("");
//   let newStringLength = newString.length;

//   let difference = fullTextLength - newStringLength;

//   return difference / searchTextLength;
// }

// condensed version
function solution(fullText, searchText){
  let newString = fullText.split(searchText).join("");
  return (fullText.length - newString.length) / searchText.length;
}

console.log(solution("aa_bb_cc_dd_bb_e", "bb")) // 2
console.log(solution("aaabbbcccc", "bbb")) // 1
console.log(solution("aaa", "aa")); // 1