/*Complete the solution so that it returns the number of times the search_text is found within the full_text. Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

Usage example:

full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
    ---> should return 2 since "bb" shows up twice


full_text = "aaabbbcccc", search_text = "bbb"
    ---> should return 1


Input: two strings
Output: how many times the 2nd string shows up in the first string

Algo: 
  - declare a var count and init to 0
  - declare a var start and init to 0

  - iterate through str1
    - take a slice of the string throughout the iteration
    - check if that portion the string contains str 2. 
      - if so, reassign start to idx 

  - return count 

'aaa'.slice(0, 1) a 
'aaa'.slice(0, 2) aa 
'aaa'.slice(2, 3) a 
*/

function solution(str1, str2) {
  let count = 0;
  let start = 0; 

  for (let end = str2.length; end < str1.length; end++) {
    if (str1.slice(start, end).includes(str2)) {
      count += 1;
      start = end;
    }
  }

  return count; 
}

console.log(solution("aa_bb_cc_dd_bb_e", "bb")) // 2
console.log(solution("aaabbbcccc", "bbb")) // 1
console.log(solution("aaa", "aa")); // 1