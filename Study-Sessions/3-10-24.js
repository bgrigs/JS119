// Problem Description
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:
// Let's say you are given the array [1, 2, 3, 4, 3, 2, 1]:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index [1, 2, 3] and the sum of the right side of the index [3, 2, 1] both equal 6.

// Another one:
// You are given the array [20, 10, -80, 10, 10, 15, 35]
// At index 0 the left side is []
// The right side is [10, -80, 10, 10, 15, 35]
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

/*
Input: array of integers
Output: number
  - number will represent an index value of the original array  
    - everything to the left and to the right must be equal 
  - if there's no index that can equally (in sum) split the array, return -1

- empty arrays (anything before index 0 and everything after the last index) will be equal to 0
  - this index is not included in the sums

Data structure: array


0 | much larger -- idx 0
1 | much larger -- idx 1
3 | 10 -- idx 2
6 | 6 -- idx 3 -- RETURN THIS IDX NUMBER

- declare a variable called leftSum;
- declare a var called rightSum; 
- declare a variable called seperatorIdx 

Iterate through the array
  - declare a variable called leftArr;
  - declare a variable called rightArr;

  - if idx === 0, assign leftSum = 0
  - if idx === array.length - 1, rightRum = 0

  - We're at idx 1...
  - asssign leftArr to array.slice(0, idx)
  - assign rightArr to array.slice(idx + 1)

  - leftSum = all of the elements in leftArr added together
  - rightSum = all of the elements in rightArr added together

  - if leftSum === rightSum, assign seperatorIdx = idx;
    - break out of our loop
  
  
  return seperatorIdx 
    - else return -1 
*/

function findEvenIndex(array) {
  for (let idx = 0; idx < array.length; idx++) {
    let leftArr = array.slice(0, idx);
    let rightArr = array.slice(idx + 1);
    
    if (checkEquality(leftArr, rightArr)) {
      return idx;
    }
  }

  return -1;
}

function checkEquality(leftArr, rightArr) {
  let leftSum = leftArr.reduce((accum, elem) => accum + elem, 0);
  let rightSum = rightArr.reduce((accum, elem) => accum + elem, 0);
  
  return leftSum === rightSum;
}

// Test Cases
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3); // true
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1); // true
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1); // true
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3); // true
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0); // true
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6); // true
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3); // true

