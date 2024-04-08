/*
// Implement a function that calculates the sum of numbers inside of a string.
// Example: "L12aun3ch Sch3oo45l" === 63
// You can expect that the string will include only non-negative numbers

Input: string (that consists of letters and numbers)
Output: number

let sum = 0;

- split the string into an array
  - declare a var called add and init to ''
  - iterate through each char. if the char can be converted into a number, concat it with add
    - if the next char can be converted into a number, concat it with add
      - if the next char cannot be converted into a number, convert add to a number and add it to sum
        - reassign add to ''

- return sum

*/

function sumOfNumbers(string) {
  let sum = 0;
  let temp = '';

  for (let idx = 0; idx <= string.length; idx++) {
    if (!isNaN(string[idx])) temp += string[idx];
    else {
      sum += Number(temp);
      temp = '';
    }
  }

  return sum;
}

console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
console.log(sumOfNumbers("HE2LL3O W1OR5LD1") === 12);
console.log(sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") === 3635);

// original solution. 
// this worked for the test cases provided but when I altered the first test to make the last digit a number it no longer worked.

// function sumOfNumbers(string) {
//   let sum = 0;
//   let add = '';
  
//   string.split("").forEach(elem => {
//     let converted = Math.abs(elem);
//     if (!isNaN(converted)) add += elem;
//     else {
//       sum += Number(add);
//       add = '';
//     }
//   });

//   return sum;
// }

