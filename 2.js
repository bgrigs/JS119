// Create a function that takes an array of integers as an argument. The function should return the minimum sum of 5 consecutive numbers in the array. If the array contains fewer than 5 elements, the function should return null.

/*
Input: array of integers
Output: number
  - minimum sum of 5 CONSECUTIVE nums in the array
  - return null if the array contains fewer than 5 elements

[15, 9] - return the lowest number
[15, 20] - return the lowest number

Declare a variable sums and init to an empty []

Iterate through the array
  - if index < array.length - 5
    - take a copy of everything from that index up until that index + 5
      - add all of those numbers together and return the sum

  - sort sum in ascending order and return the lowest number
*/

function minimumSum(array) {
  let CONSECUTIVE = 5;
  if (array.length < CONSECUTIVE) return null; 

  let sums = [];

  for (let idx = 0; idx <= array.length - CONSECUTIVE; idx++) {
    let sum = array.slice(idx, idx + CONSECUTIVE).reduce((accum, elem) => accum + elem);
    sums.push(sum);
  }

  return sums.sort((a,b) => a - b)[0];
}

const p = console.log;
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
// The above tests should each print true.

