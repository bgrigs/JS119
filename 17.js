// Problem 17
// Create a function that takes an array of integers as an argument. The function should determine the minimum integer value that can be appended to the array so the sum of all the elements equal the closest prime number that is greater than the current sum of the numbers. For example, the numbers in [1, 2, 3] sum to 6. The nearest prime number greater than 6 is 7. Thus, we can add 1 to the array to sum to 7.

// Notes:

// The array will always contain at least 2 integers.
// All values in the array must be positive (> 0).
// There may be multiple occurrences of the various numbers in the array.

/*
Input: array of ints
Output: number
  - adding this number should make it so that the sum of all the elements in the array:
    - 1) equal to the closest prime number
    - 2) sum > than the current 

- declare a var sum and init to all of the elements added together

- declare a var called add and init to 1 

- create a loop that adds add to sum
  - if this number is prime (only evenly divisible by itself and 1)
  - and if this number is > sum 
    - break out of loop 
  - else add 1 to add each iteration 

  return add 


Helper function checkPrime 
  - iterate starting from 2 to the given number
    - if the given number is evenly divisible by any number, return false 
*/

function nearestPrimeSum(array) {
  let sum = array.reduce((accum, elem) => accum + elem);
  let add = 1;

  while (true) {
    let newSum = add + sum;
    if (isPrime(newSum)) break;
    add += 1;
  }

  return add; 
}

function isPrime(number) {
  for (let divideBy = 2; divideBy < number; divideBy++) {
    if (number % divideBy === 0) return false; 
  }

  return true;
}


const p = console.log;
p(nearestPrimeSum([1, 2, 3]) === 1);        // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4);           // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2);        // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);
// The above tests should each print true.