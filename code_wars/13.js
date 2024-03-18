// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:
// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Input
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// If you are given an array with multiple answers, return the lowest correct index.


/*
Input: array
Output: number
  - number will represent the index that evenly "splits" the array
    - aka: when added together all of the numbers before this index and all of the nums after this index will be equal

Looking at index 0
[] - everything before index 0 --- array.slice(0, 0)
[2, 3, 4, 3, 2, 1] - everything after index 0 ---- array.slice(1)

Looking at index 1
[1] - everything before index 1 ---- array.slice(0, 1)
[3, 4, 3, 2, 1] - everything after index 1 ---- array.slice(2)



Algo:
  - declare a var leftSide
  - declare a var rightSide

  - iterate through the array 
    - assign leftSide to copy of array from idx 0 up until the idx we are iterating over
    - assign rightSide to copy of array from (idx + 1) 


Helper function isEqual
  - sum elems from leftSide
  - sum elems from rightSide
  - if the two sums are equal, return true
*/

function findEvenIndex(arr) {
  let seperatorIdx = -1;

  for (let idx = 0; idx < arr.length; idx++) {
    let leftSide = arr.slice(0, idx);
    let rightSide = arr.slice(idx + 1)
    if (isEqual(leftSide, rightSide)) {
      seperatorIdx = idx;
      break;
    }
  }

  return seperatorIdx;
}

function isEqual(leftSide, rightSide) {
  let leftSum = leftSide.reduce((accum, elem) => accum + elem, 0);
  let rightSum = rightSide.reduce((accum, elem) => accum + elem, 0);
  return leftSum === rightSum;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");