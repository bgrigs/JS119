/*
Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

Input: string of integers
Output: number (of odd-numbered substrings)

1357

Algo:
  - declare a var called count and init to 0

  - iterate through the string
    - outer loop that grabs the first idx
      - inner loop that grabs a second idx
        - if Number(str.slice(firstIdx, secondIdx)) is odd, add 1 to count 

  - return count 
*/

function solve(str) {
  let count = 0;

  for (let firstIdx = 0; firstIdx < str.length; firstIdx++) {
    for (let secondIdx = firstIdx + 1; secondIdx <= str.length; secondIdx++) {
      if (Number(str.slice(firstIdx, secondIdx)) % 2 === 1) count += 1;
    }
  }

  return count;
}

console.log(solve("1341"),7);
console.log(solve("1357"),10);
console.log(solve("13471"),12);
console.log(solve("134721"),13);
console.log(solve("1347231"),20);
console.log(solve("13472315"),28);
