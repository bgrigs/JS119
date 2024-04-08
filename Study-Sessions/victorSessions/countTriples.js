// Write a function that returns the count of triple of numbers that have 2 odd numbers and 1 even. If there’s none return -1. All numbers in the array will be integers greater than 0.

/*
Input: array
Output: number
  - count of groups of 3 that have 2 odd nums and 1 even
    - if 0, return -1

Rules: all numbers will be integers > 0

[1, 2, 3, 4]
[1, 2, 3] - 2 odds, 1 even
[1, 3, 4] - 2 odds, 1 even
[2, 3, 4] - X

[1, 2, 3, 4, 5, 6]
[1, 2, 3] 
[1, 2, 5]
[1, 3, 4]
[1, 3, 6]
[1, 4, 5]
[1, 5, 6]
[2, 3, 5]
[3, 4, 5]
[3, 5, 6]

- find every possible subarray from the given array
  - 3 loops

Helper function filterArrays
- declare a var odd and init to 0
- declare a var even and init to 1

- iterate through each subarray
  - if an element is even, add 1 to even
  - if an element is odd, add 1 to odd
  - if even === 1 and odd === 2, return that array
*/ 

function countTriples(array) {
  let subarrays = [];

  for (let firstIndex = 0; firstIndex < array.length - 2; firstIndex++) {
    for (let secondIndex = firstIndex + 1; secondIndex < array.length - 1; secondIndex++) {
      for (let thirdIndex = secondIndex + 1; thirdIndex < array.length; thirdIndex++) {
        subarrays.push([array[firstIndex], array[secondIndex], array[thirdIndex]]);
      }
    }
  }

  return filterArrays(subarrays).length || -1;
}

function filterArrays(array) {
  return array.filter(subarray => {
    let odd = 0;
    subarray.forEach(element => {
      if (element % 2 === 1) odd += 1;
    })
    return odd === 2;
  })
}

// Test cases
console.log(countTriples([1, 2, 3, 4])); // Expected output: 2
console.log(countTriples([2, 4, 6, 8])); // Expected output: -1
console.log(countTriples([1, 3, 5, 7])); // Expected output: -1
console.log(countTriples([1, 2, 3, 4, 5, 6])); // Expected output: 9