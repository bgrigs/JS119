// Create a function that takes an array of numbers as an argument. For each number, determine how many numbers in the array are smaller than it, and place the answer in an array. Return the resulting array.

// When counting numbers, only count unique values. That is, if a number occurs multiple times in the array, it should only be counted once.

/*
Input: array of numbers
Output: array of numbers
  - for each number in the input return, return a number that shows how many numbers in the original array are smaller than that number
  - only count unique values...no duplicates

Helper function: remove duplicates
  - declare a variable duplicatesRemoved
  - iterate through each number of the original array
    - if the number is seen again in the array, do not push the number to duplicatesRemoved
      - if it not seen again, push the number

[8, 1, 2, 2, 3]
[8, 1, 2, 3]

Iterate through each number of the original array
  - delcare a var count and init to 0
  - iterate through each number of our duplicatesRemoved array
    - for each number that is less than the element we are iterating over in our outer loop, add 1 to count
    - return count 
*/

function smallerNumbersThanCurrent(array) {
  let duplicatesRemoved = removeDuplicates(array);

  return array.map(comparisonNumber => {
    let count = 0;
    duplicatesRemoved.forEach(number => {
      if (comparisonNumber > number) count += 1;
    });
    return count;
  });
}

function removeDuplicates(array) {
  return array.filter((number, idx) => {
    if (array.slice(idx + 1).includes(number)) return false;
    return true; 
  });
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));
//The above tests should each print true.