function findEvenIndex(array) {
  let sum = array.reduce((accum, elem) => accum + elem);

  for (let idx = 0; idx < array.length; idx++) {
    let differenceHalved = (sum - array[idx]) / 2;
    let remainingSum = array.slice(idx + 1).reduce((accum, elem) => accum + elem, 0);
    if (differenceHalved === remainingSum) return idx;
  }

  return -1;
}

// Test Cases
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3); // true
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1); // true 102
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1); // true
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3); // true
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0); // true
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6); // true
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3); // true


