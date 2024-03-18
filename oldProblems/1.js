// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

/*
Input: array of numbers
Output: array of numbers 
  - for each number in the original, find out how many numbers in the arr are smaller
  - in the array, display this count per element of the original
  - only count each number 1x

Algo:
- helper function removeDuplicates 
  - sort array
  - filter array...only include elements that are not equal to the next element

- iterate through the array
  - iterate through the array again. 
    - return a new array that only contains numbers that are less than the elem
    - return the length of this filtered array
*/

// Examples:

function smallerNumbersThanCurrent(arr) {
  let duplicatesRemoved = removeDuplicates(arr);
  return arr.map(number => {
    return duplicatesRemoved.filter(elem => number > elem).length;
  });
}

function removeDuplicates(arr) {
  let sortedCopy = arr.slice().sort((a, b) => a - b);
  return sortedCopy.filter((number, idx) => number !== sortedCopy[idx + 1]);
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]