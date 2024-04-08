// You are given an array of strings and an integer `k`.
// Your task is to return the first longest string consisting of `k` consecutive strings taken from the array.

// Example: 

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

/*
Input: array of strings, integer k
Output: string 

if array.length < integer k OR integer k is <= 0 return ''
-if integer k is 1, return the longest string-

declare a var longest and inti to ''

- iterate through the array starting at idx until array.length - k (check for off by one error)
  let tempString = array[idx0]
  - inner loop that iterates from idx + 1 until that number reaches firstIndex + k
    - tempString += currentelem
    - if tempString is > longest, reassign longest to tempString


- return longest 
*/

function longestConsec(array, k) {
  if (array.length < k || k <= 0) return '';

  let longest = '';

  for (let firstIndex = 0; firstIndex <= array.length - k; firstIndex++) {
    let tempString = array.slice(firstIndex, firstIndex + k).join("");
    if (tempString.length > longest.length) longest = tempString;
  } 

  return longest;
}


// Test Cases
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true

