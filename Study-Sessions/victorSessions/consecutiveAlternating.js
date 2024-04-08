// # Write a function that returns the maximum possible consecutive alternating odd and even (or even and odd) numbers. Minimum possible length is `2`. If there’s none return `[]`. 

/*
Input: array
Output: array
  - return an empty array if our array has a length that is less than 2
  - otherwise return an array of as many nums as possible. the nums must go from odd to even or from even to odd in order to be pushed to our array

Algo: 
- declare a var result and init to []
- declare a var called consecutive and init to an empty array []

- helper function that determine if a num is even or odd
*/ 

function longestAlternatingSubarray(array) {
  let result = [];
  let consecutive = [];

  for (let idx = 0; idx < array.length; idx++) {
    let currentElem = array[idx];
    let previousElem;
    if (consecutive.length > 0) previousElem = consecutive[consecutive.length - 1]

    if (idx === 0) {
      consecutive.push(currentElem);
    } else if (isEven(previousElem)
        && !isEven(currentElem)) {
        consecutive.push(currentElem);
        result.push(consecutive.slice());
    } else if (!isEven(previousElem) 
        && isEven(currentElem)) {
        consecutive.push(currentElem);
        result.push(consecutive.slice());
    } else {
      consecutive = [currentElem];
    }
  }

  if (result.length === 0) return [];
  return result.sort((a, b) => b.length - a.length)[0];
}

function isEven(num) {
  return num % 2 === 0; 
}

console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: [6, 7, 12, 11] 
console.log(longestAlternatingSubarray([1, 2, 3, 7, 8, 5, 4])); // Expected: [7, 8, 5, 4]
