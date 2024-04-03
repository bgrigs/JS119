/*Problem 19
Create a function that takes an array of integers as an argument and returns the integer that appears an odd number of times. There will always be exactly one such integer in the input array.

Input: array of integers
Output: integer that appears an odd # of times 

Data structure: obj

Algo:
  - declare a var count and init to {}
  - declare a var oddOccurence;

  - make every element a key on the object and set the value to how often the key appears

  - iterate through the obj and if the value is not even number,
    - oddOccurence = the key  
    - break

  - return Number(oddOccurence) 
*/

function oddFellow(array) {
  let count = {};
  let oddOccurence;

  for (let elem of array) {
     count[elem] = count[elem] + 1 || 1; 
  }

  for (let key in count) {
    if (count[key] % 2 !== 0) {
      oddOccurence = Number(key);
      break;
    }
  }

  return oddOccurence;
}

const p = console.log;
p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);
// The above tests should each print true.