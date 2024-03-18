/*
For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return :

an array [t, k] (in Ruby and JavaScript)
Examples:
"ababab" ---> (t = "ab", k = 3)

"abcde" ---> (t = "abcde", k = 1)
because for this string, the minimum substring 't'
such that 's' is 'k' times 't', is 's' itself.

Input: lowercase string (will never empty)
Output: an array
  - the first element will be the smallest possible substring
  - the second element will be how many times that substring occurs in the string
    - the entire string will be equal to element 1 x element 2

Data structure: an array to store all possible substrings
  
Algo:
  Helper function findSubstrings (going to find all leading substrings)
    - init an empty array to a var called substrings
    - loop through each char of the original string
    - init an empty string to a var called substring 
    - as long as the char isn't the last char of the string 
      - concat the letter we are iterating over with the next letter and assign to substring
      - push substring to substrings array

  - iterate through substrings array
    - filter the array by the substrings return an array of '' when the original string is split by that substring
      - sort this filtered array by length in ascending order
        - the element at idx 0 will be the first element of the array we return 
        - for the second element of the array we return, split the string by the substring. return the length of that array - 1
*/

function f(string) {
  let substrings = findSubstrings(string);

  let filteredSubstrings = substrings.filter(substring => {
    if (string.split(substring).every(elem => elem === '')) return substring;
  })

  let smallestSubstring = filteredSubstrings[0]; 
  let frequency = string.split(smallestSubstring).length - 1;

  return [smallestSubstring, frequency];
}

function findSubstrings(string) {
  let substrings = [];
  for (let idx = 0; idx < string.length; idx++) {
    let substring = "";
    substring = string.slice(0, idx + 1);
    substrings.push(substring);
  }

  return substrings;
}

console.log(f("ababab"), ["ab", 3]);
console.log(f("abcde"), ["abcde", 1]);