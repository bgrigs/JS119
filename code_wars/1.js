/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

Input: string
Output: obj
*/


function count(string) {
  if (string.length === 0) return {};
  let count = {}
  string.split("").forEach(char => {
    count[char] = count[char] + 1 || 1;
  })

  return count;
}


