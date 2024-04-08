/*
Numerical palindrome
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332 
110011 
54322345
You'll be given 2 numbers as arguments: (num, s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count. 

Single digit numbers will NOT be considered numerical palindromes. 

Input: num, length
Output: array 

- let palindromes = []
- guard clause: if length is 0, return palindromes

- if num < 10 ? 10 : num

- while loop that iterates as long as palindromes.length < length
  - add 1 to num
  - check if this is a palindrome and if so, push to palindromes
*/

function palindrome(num, length) {
  let palindromes = [];
  if (length === 0) return palindromes;

  let numToCheck = num < 11 ? 11 : num;
  
  while (palindromes.length < length) {
    let reversed = numToCheck.toString().split("").reverse().join("");
    if (numToCheck === Number(reversed))
    palindromes.push(numToCheck);
    numToCheck += 1;
  }

  return palindromes;
}


console.log(palindrome(6,4)); // [11,22,33,44]
console.log(palindrome(75,1)); // [77]
console.log(palindrome(101,2)); // [101,111]
console.log(palindrome(20,0)); // []
console.log(palindrome(0,4)); // [11,22,33,44]