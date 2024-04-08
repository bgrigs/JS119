// The objective is to return all pairs of numbers from a given array of numbers
// that have a difference of 2.
// The result array should be sorted in ascending order of values.
// Assume there are no duplicate numbers in the array.


// []


/*
input: an array of digits
output: an array comprising at least 0 subarrays all the way up to length of argument array / 2. Each subarray is comprised of 2 numbers, that have a difference of 2 between them

d:
arrays

a:
- declare a var difference and init to []

  - sort array

  - outer loop (firstIndex < array.length - 1)
    - inner loop 
      - start at firstIndex + 1, run until the end of the array
    -during each iteration, compare the digit at firstIndex to digit at secondIndex
      - if there is a difference of two between these two digits, push difference.push([num1, num2])

  return difference 
*/

function differenceOfTwo(array) {
  let differences = [];

  array.sort((a,b) => a - b);

  for (let firstIndex = 0; firstIndex < array.length - 1; firstIndex++) {
    for (let secondIndex = firstIndex + 1; secondIndex < array.length; secondIndex++) {
      let firstNumber = array[firstIndex];
      let secondNumber = array[secondIndex];
      if (Math.abs(firstNumber - secondNumber) === 2) {
        differences.push([firstNumber, secondNumber]);
      }
    }
  }

  return differences;
}


console.log(differenceOfTwo([1, 2, 3, 4]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3]));
// // [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7]));
// //  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// // [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4]));
// // [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13]));