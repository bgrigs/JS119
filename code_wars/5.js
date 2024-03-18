/*
Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

Input: string of integers
Output: a number of all of the odd-numbered substrings that can be formed

Data structure: an array that stores all of the odd-numbered substrings

Algo:
- create a var oddSubtrings and init to []
- create a var substring and itit to ""

- iterate through each char of the string
  - concat it with substring
    - coerce substring to a number
      - if it is odd, push it to oddSubstrings array
      - concat the next char to substring, repeat process

*/

function solve(string){
  let oddSubstrings = [];
  let charArr = string.split("");

  charArr.forEach((_, idx) => {
    let substring = "";
    while (idx < charArr.length) {
      substring += charArr[idx]; 
      // only check last integer in order to pass tests for larger numbers on Code Wars
      if (Number(substring[substring.length - 1]) % 2 === 1) oddSubstrings.push(substring);
      idx += 1;
    }
  })

  return oddSubstrings.length;
};

console.log(solve("1341"),7);
console.log(solve("1357"),10);
console.log(solve("13471"),12);
console.log(solve("134721"),13);
console.log(solve("1347231"),20);
console.log(solve("13472315"),28);
