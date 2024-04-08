// You are given an array of strings and an integer `k`.
// Your task is to return the first longest string consisting of `k` consecutive strings taken from the array.

// Example: 

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

/*
Input: 1) array an of strings 2) integer 'k'
Output: string 
  - concat k # of strings that will return the FIRST longest possible string
  - the two strings MUST be consecutive 
    - concat them in the order they appear 

Rules:
  - if k is 0 OR > length of the array, return an empty string 

Algo: 
  - create 2 guard clauses
    -if f k is <= 0 OR > length of the array, return an empty string
    -if k is 1, return the longest element 

  - create a new array called concatenated
  - iterate through the original array
    - create a local var called concatString and init to ''
    - create a nested loop that iterates k number of times
      - concat the currentString with the element we are iterating over in the nested loop 
    - push concatString to concatenated (array)
  
  - sort concatenated by length of each element in descending order
  - return element at index 0
*/


function longestConsec(arr, k) {
  if (k <= 0 || k > arr.length) return '';
  
  if (k === 1) {
    return findLongestString(arr.slice())
  }

  let concatenated = concat(arr, k);

  return findLongestString(concatenated)
}


function concat(arr, k) {
  let concatenated = [];

  arr.forEach((_, idx) => {
    let count = 0;
    let concatString = '';
      while (count < k) {
        concatString += arr[idx];
        idx += 1;
        count += 1;
      }
    
    if (idx <= arr.length) {
      concatenated.push(concatString);
    }
   });

   return concatenated;
}

function findLongestString(array) {
  return array.sort((a, b) => b.length - a.length)[0];
}


// You are given an array of strings and an integer `k`.
// Your task is to return the first longest string consisting of `k` consecutive strings taken from the array.

// Example: 

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".





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

