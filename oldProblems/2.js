// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

/*
Input: an array of integers
Output: 
  return null if the array contains less than 5 elements
  if array contains 5 or more elements
    return the minimum sum of 5 consec numbers

Algo 
  - immediately return null if length of array is less than 5
  - declare a var called consecutive and set to 5
  - declare a var called sums = []

  - iterate through each num
    - have an inner loop that iterates through the next 4 elements
    - return the sum of those 5 elements and push to sums

  - sort sums in ascending value
  - return the value at index 0
*/

function minimumSum(arr) {
  let consecutive = 5;
  if (arr.length < consecutive) return null;
  
  let sums = [];

  arr.forEach((_, idx) => {
    if (idx <= arr.length - consecutive) {
    sums.push(arr.slice(idx, idx + consecutive)
      .reduce((accum, elem) => accum + elem, 0));
    }
  })

  return sums.sort((a,b) => a - b)[0];
}

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".