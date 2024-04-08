/* Given an array of numbers, return true if at least 3 sets of 3 consecutive numbers are increasing order. 
Input: array (of nums)
Output: boolean 
  - true if there at at least 3 sets of 3 consecutive nums in increasing order

Rules
  - a single number can be part of multiple sets
  - there doesn't have to be a pattern...the sets just need to go in increasing order

Data structure: an array with 3 nested arrays
  - our results array must have a length of 3 in order to return true

Algo:
  - dec a var results and init to an empty array
  - iterate through the original array
    - iteration condition - idx < array.length - 2
    - check if the elem after the index we are iterating over is bigger then the current elem
    - check if the elem after that elem is bigger than the one after the current elem
     - if so, push these 3 nums into the results array (push them inside of a nested array)
    
  - return true if the results arr has a length of 3
*/

function threeIncreasingSets(array) {
  let results = [];

  for (let idx = 0; idx < array.length - 2; idx++) {
    let num1 = array[idx];
    let num2 = array[idx + 1];
    let num3 = array[idx + 2];
    if (num2 > num1 && num3 > num2) results.push([num1, num2, num3]);
  }

  return results.length >= 3;
}

console.log(threeIncreasingSets([1, 2, 3, 4, 5, 6, 7])); // true (1,2,3), (2,3,4), (3,4,5)...
console.log(threeIncreasingSets([1, 3, 5, 7, 9, 11, 13])); // true (1,3,5), (3,5,7), (5,7,9)...
console.log(threeIncreasingSets([1, 2, 1, 3, 4, 5, 7, 8])); // true (1,3,4), (3,4,5), (5,7,8)
console.log(threeIncreasingSets([1, 2, 3, 1, 2, 1, 2])); // false
console.log(threeIncreasingSets([10, 9, 8, 7, 6, 5, 4])); // false