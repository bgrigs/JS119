// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

/*

Output: array of integers
Input: integer (that appears an odd # of times)

Data structure:
  - object that stores the frequency of each key

Algo:
  - declare a var count and init to {}
  - iterate through the array
    - for every integer, see if it already exists in the count object
      - if it does, add 1 to the key (elem) value, else init to 0 
    
  - Turn count into an array of nested arrays
    - filter the array
      - find the element in that has a odd number in the second idx

*/


function findOdd(array) {
  let count = {};

  array.forEach(integer => {
    count[integer] = count[integer] + 1 || 1; 
  })

  for (let key in count) {
    if (count[key] % 2 === 1) return Number(key);
  }
}

console.log(findOdd([7], 7));
console.log(findOdd([0], 0));
console.log(findOdd([1,1,2], 2));
console.log(findOdd([0,1,0,1,0], 0));
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1], 4));
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5));
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5], -1));
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5], 5));
console.log(findOdd([10], 10));
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1], 10));
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10], 1));