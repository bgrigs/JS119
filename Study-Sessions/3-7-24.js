// Given a list of integers and a single sum value, return the first two values
// in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

//Example:

// console.log(sumPairs([4, 3, 2, 3, 4],         6));
//                    ^-----^         4 + 2 = 6, indices: 0, 2
//                       ^-----^      3 + 3 = 6, indices: 1, 3
//                          ^-----^   2 + 4 = 6, indices: 2, 4
// == [4, 2]

// Negative numbers and duplicate numbers can and will appear.

/*

- Initialize an empty array to store the values
- Iterate through the list of integers
- For each integer, 
  - Calculate the difference between the target sum and the num
  - Check if the difference is in the arrays set
    - If it is, return the pair(diff, num)
    - If it is not, add num to the array set
  - If no pair is found in the iteration, return 


Input: 1) array 2) number 
Output: array of 2 elems that add up to the number

Initialize an empty array to store the values: numbersToAdd
- Iterate through the list of integers
  -outer loop that's iterating over the current element
  - an inner that's iterating over the next element that we're adding 
  AKA:
  - Add element at idx 0 with element at idx 1
    - add element at idx 0 with elem at idx 2
      - and so until we've reached the end of the original array. Then start with the next number in the outer loop 
  - if the sum of the firstNum we are iterating over with and the secondNum is equal to number, push an object to numbersToAdd with the following values
    - {firstNum: , secondNum: , secondNumIdx: }

- sort the array by the number in secondNumIdx in each object (ascending order)
  - return the values at index 0 and index 1 from the very first element (at index 0) in the sorted array


console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
5, 5 (index 5)
3, 7 (index 4)

*/

function sumPairs(array, number) {
  let numbersToAdd = [];

  for (let firstIdx = 0; firstIdx < array.length - 1; firstIdx++) {
    for (let secondIdx = firstIdx + 1; secondIdx < array.length; secondIdx++) {
      let firstNum = array[firstIdx];
      let secondNum = array[secondIdx];
      if (firstNum + secondNum === number) {
        numbersToAdd.push({'firstNum': firstNum, 'secondNum': secondNum, 'secondIdx': secondIdx});
      }
    }
  }

  if (numbersToAdd.length === 0) return undefined;

  let sorted = numbersToAdd.sort((a, b) => a.secondIdx - b.secondIdx);

  return [sorted[0].firstNum, sorted[0].secondNum];
}


//Test cases
console.log(sumPairs([4, 3, 2, 3, 4],         6)); // [4, 2]
console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([0, 0, -2, 3], 2)); // undefined
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); // [1, 1]
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([0, 2, 0], 0)); // [0, 0]
console.log(sumPairs([5, 9, 13, -3], 10)); // [13, -3]