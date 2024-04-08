// Write a function that returns the count of triple of numbers that have 2 odd numbers and 1 even. If there’s none return -1. All numbers in the array will be integers greater than 0.

/*
input: array of numbers
output: numbers

declare a var count and init to 0

3 loops to capture 3 elements from the array 
  - first loop will run until array.length - 2
    - second loop will run until array.length - 1
      - third loop goes until the end
         - oddCount = 0
        - evenCount = 0
      - []...3 nums].forEach ... add to odd or even accordingly
      - if oddCount is === 2 and evenCount is === 1, add 1 to count 
    
return count > 0 ? count : -1 ;
*/

function countTriples(array) {
  let count = 0;

  for (let firstIdx = 0; firstIdx < array.length - 2; firstIdx++) {
 
    for (let secondIdx = firstIdx + 1; secondIdx < array.length - 1; secondIdx++) {
      for (let thirdIdx = secondIdx + 1; thirdIdx < array.length; thirdIdx++) {
        let oddCount = 0;
        let evenCount = 0;
        [array[firstIdx], array[secondIdx], array[thirdIdx]].forEach(elem => {
          if (elem % 2 === 0) evenCount += 1;
          else oddCount += 1;
        });
        if (oddCount === 2 && evenCount === 1) count += 1;
      }
    }
  }
  return count > 0 ? count : -1;
}


// Test cases
console.log(countTriples([1, 2, 3, 4])); // Expected output: 2
console.log(countTriples([2, 4, 6, 8])); // Expected output: -1
console.log(countTriples([1, 3, 5, 7])); // Expected output: -1
console.log(countTriples([1, 2, 3, 4, 5, 6])); // Expected output: 9