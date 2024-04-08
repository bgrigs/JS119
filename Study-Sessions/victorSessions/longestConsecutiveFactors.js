// Write a function that returns the longest consecutive numbers that are factors of the given target number. 

// factor: a number that divides another number or expression evenly

/*
Input: 1) array 2) target number
Output: array 
  - longest consecutive nums from the original array are factors of the target number

[1, 2, 11, 12, 5, 4], 60)); // Expected: [12, 5, 4]
[1, 2]
[12, 5, 4]

Algo: 
- declare a variable consecutiveFactors and init []
- declare a var factors and init to []


- iterate through the original array 
  - if the target num divides by the element evenly, push to factors
  - if the target num does not divide by the element evenly 
    - consecutiveFactors.push(factors)
    - reassign factors to []
  - if the targer num does divide evenly && the idx === array.length - 1
    - consecutiveFactors.push(factors)

- sort consecutiveFactors by the length of each element (which are arrays)
  - return consecutiveFactors[0]
*/

function longestConsecutiveFactors(array, targetNumber) {
  let consecutiveFactors = [];
  let factors = [];

  for (let idx = 0; idx < array.length; idx++) {
    let number = array[idx];
    if (targetNumber % number === 0) {
      factors.push(number);
      if (idx === array.length - 1) consecutiveFactors.push(factors);
    }
    if (targetNumber % number !== 0) {
      consecutiveFactors.push(factors);
      factors = []; 
    }
  }

  return consecutiveFactors.sort((a, b) => b.length - a.length)[0]
}

// Test cases
console.log(longestConsecutiveFactors([1, 2, 11, 12, 5, 4], 60)); // Expected: [12, 5, 4]
console.log(longestConsecutiveFactors([1, 2, 3, 4, 5, 6], 12)); // Expected: [1, 2, 3, 4]
console.log(longestConsecutiveFactors([10, 15, 20, 25, 30], 150)); // Expected: [10, 15]
console.log(longestConsecutiveFactors([1, 3, 7, 9], 21)); // Expected: [1, 3, 7]
console.log(longestConsecutiveFactors([2, 4, 6, 8, 10], 40)); // Expected: [2, 4]