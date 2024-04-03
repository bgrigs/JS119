// Problem 18
// Create a function that takes an array of integers as an argument. Determine and return the index N for which all numbers with an index less than N sum to the same value as the numbers with an index greater than N. If there is no index that would make this happen, return -1.

// If you are given an array with multiple answers, return the index with the smallest value.

// The sum of the numbers to the left of index 0 is 0. Likewise, the sum of the numbers to the right of the last element is 0.

/*
Input: array of integers
Output: number

- declare a var sum and assign it to all of the elements/numbers added together 
- declare a var idx  and init to 0 

- loop through the array
  - declare a var called half and assign to = subtract the current element from the sum and divide the sum by 2 
  - check if the sum all of the elements after the current element are === half
    - if so, break 
  - add one to idx each iteration

- return idx
*/ 

function equalSumIndex(array) {
  let sum = array.reduce((accum, elem) => accum + elem);
  let idx = 0;

  while (idx < array.length) {
    let half = (sum - array[idx]) / 2;
    if (half === array.slice(idx + 1)
                      .reduce((accum, elem) => accum + elem)) break; 
    idx += 1; 
  }

  return idx; 
}

const p = console.log;
p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);
// The above tests should each print true.