// Problem 20
// Create a function that takes an array of numbers, all of which are the same except one. Find and return the number in the array that differs from all the rest.

// The array will always contain at least 3 numbers, and there will always be exactly one number that is different.

/*
- sort the array
- take the first element of the array
  - if indexOf and lastIndex are the same, return that num
  - else return the next num in the array
*/

function whatIsDifferent(array) {
  let sorted = array.sort((a, b) => a - b);
  let uniqueNum;

  for (let idx = 0; idx < sorted.length; idx++) {
    let num = sorted[idx];
    if (sorted.indexOf(num) === sorted.lastIndexOf(num)) {
      uniqueNum = num;
      break;
    }
    else uniqueNum = sorted[sorted.length - 1];
    break;
  }

  return uniqueNum;
}

const p = console.log;
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);
// The above tests should each print true.