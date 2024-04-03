// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

const check = require("check-node-version");

/*
In: array of integers
Out: an array with the two #s that are closest together in value

Algo:
  - declare a var closest and init to []
  
  - outer loop that retrieves our first num (run until array.length - 1 )
    - inner loop that retrieves our next num (run until end of array)
    - declare a var called checkNums and init [firstNum, nextNum]
    - if length of closest is 0 || the difference between checkNums is less than the difference between closest
      - closest = checkNums

  - return closest 

- how to check for difference:
  - Math.abs(checkNums[0] - checkNums[1]) < Math.abs(closest[0] - closest[1])
*/

function closestNumbers(array) {
  let closest = [];

  for (let firstIdx = 0; firstIdx < array.length - 1; firstIdx++) {
    for (let nextIdx = firstIdx + 1; nextIdx < array.length; nextIdx++) {
      let checkNums = [array[firstIdx], array[nextIdx]];
      if (closest.length === 0 || 
        Math.abs(checkNums[0] - checkNums[1]) < Math.abs(closest[0] - closest[1])) {
        closest = checkNums;
      }
    }
  }

  return closest;
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]