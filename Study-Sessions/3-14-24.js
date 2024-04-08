/*
You're given an array of integers. You must return the number of 'arithmetic progressions' of size 3 that are possible from that list.

In each progression, the differences between the elements must be the same.

Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
[1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted.
*/

/*
Input: array (sorted in ascending order)
Output: number 

Return the # progressions (must be 3 elements) that are possible from array we're given
Rule: the difference between the elements must be the same

[1, 2, 3, 5, 7, 9] 

[1, 2, 3] - adding one
[1, 3, 5] - adding 2
[] - adding 3
[1, 5, 9] - adding 4
[] adding 5 or more


*/

function progressions(array) {
  let count = 0;

  for (let firstIndex = 0; firstIndex < array.length - 2; firstIndex++) {
    for (let secondIndex = firstIndex + 1; secondIndex < array.length - 1; secondIndex++) {
      for (let thirdIndex = secondIndex + 1; thirdIndex < array.length; thirdIndex++) {
        if (array[thirdIndex] - array[secondIndex] === array[secondIndex] - array[firstIndex]) 
          count += 1;
      }
    }
  }

  return count;
}

// function progressions(array) {
//   let subarrays = [];

//   for (let firstIndex = 0; firstIndex < array.length - 2; firstIndex++) {
//     for (let secondIndex = firstIndex + 1; secondIndex < array.length - 1; secondIndex++) {
//       for (let thirdIndex = secondIndex + 1; thirdIndex < array.length; thirdIndex++) {
//         subarrays.push([array[firstIndex], array[secondIndex], array[thirdIndex]]);
//       }
//     }
//   }

//   return count(subarrays);
// }

// function count(array) {
//   return array.reduce((accum, subarray) => {
//     if (subarray[2] - subarray[1] === subarray[1] - subarray[0]) accum += 1;
//     return accum;
//   }, 0)
// }

// Test Cases
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10