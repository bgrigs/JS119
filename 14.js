// Problem 14
// Create a function that takes a single integer argument and returns the sum of all the multiples of 7 or 11 that are less than the argument. If a number is a multiple of both 7 and 11, count it just once.

// For example, the multiples of 7 and 11 that are below 25 are 7, 11, 14, 21, and 22. The sum of these multiples is 75.

// If the argument is negative, return 0.

/*
Input: single integer
Output: number/sum
  - sum of all multiples of 7 or 11 that are less than the argument.
  - if a number is multiple of both 7 and 11, count it just once

If the arg is neg return 0

Algo: 
  - declare a var sum and init to 0
  - iterate from 1 to number
    - if that num is evenly divisibly by 7 or 11, add it to sum 
*/



function sevenEleven(number) {
  if (number <= 0) return 0; 

  let sum = 0; 

  for (let add = 0; add < number; add++) {
    if (add % 7 === 0 || add % 11 === 0) sum += add;
  }

  return sum;
}

const p = console.log;
p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75);
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);
// The above tests should each print true.