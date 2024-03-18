// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

/*
In: number
Output: sum of all the multiples of 3 or 5 below the number passed in

Rules: only count a num once if its a mult of 3 or 5

Algo:
  - guard clause = if num is neg, return 0

  - declar a var multiples, init to []

  - iterate through numbers 1 - our number 
    - check if the number we are iterating over is evenly divisble by 3 OR 5
      - if it is, push to multiples

  - return all elems of multiples added together 
*/

function sumMultiples3and5(limit) {
  if (limit < 0) return 0;
  let multiples = [];

  for (let number = 1; number < limit; number++) {
    if (number % 3 === 0 || number % 5 === 0) multiples.push(number);
  }

  return multiples.reduce((accum, number) => accum + number);
}

console.log(sumMultiples3and5(10)) // 23