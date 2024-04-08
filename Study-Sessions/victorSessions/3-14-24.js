// Given an array of numbers, return the count of all combination of 3 numbers where the values are in decreasing order.

/*
Input: array (of numbers)
Output: number 
  - 

5, 4, 3
5, 4, 2
5, 4, 1
5, 3, 2
5, 3, 1
5, 2, 1
4, 3, 2
4, 3, 1
4, 2, 1
3, 2, 1

Data structure: array of nested arrays
  - return the length of this results array

Algo: 
  - declare a var called results and init to []

  - iterate through the original array

    - declare a variable decreasing and init to []
    - outer loop will only run as long as our counter is < array.length - 2

      - push my current element to decreasing

       - loop through the remainder of the array 
        - whatever startingIdx is, add 1 

        - if I find a number that is < the last element added to decreasing, push that number to decreasing 
        - if decreasing has a length of 3, push it to results and continue to the next element in the outer loop 

  - return the length of the results array 
*/

function countDecreasingTriplets(array) {
  let results = [];

  for (let startingIdx = 0; startingIdx < array.length - 2; startingIdx++) {
    let decreasing = [];
    decreasing.push(array[startingIdx]);
    for (let secondIdx = startingIdx + 1; secondIdx < array.length; secondIdx++) {
      if (array[secondIdx] < decreasing[decreasing.length - 1]) {
        decreasing.push(array[secondIdx]);
      }
      if (decreasing.length === 3) {
        results.push(decreasing);
        decreasing = [];
      }  
      for (let thirdIdx = secondIdx + 1; thirdIdx < array.length; thirdIdx++) {

        if (array[thirdIdx] < decreasing[decreasing.length - 1]) {
          decreasing.push(array[thirdIdx]);
        }
        if (decreasing.length === 3) results.push(decreasing);
        console.log(decreasing);
      }
    }
  }
}

// function countDecreasingTriplets(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length - 2; i++) {
//       for (let j = i + 1; j < arr.length - 1; j++) {
//           for (let k = j + 1; k < arr.length; k++) {
//               if (arr[i] > arr[j] && arr[j] > arr[k]) {
//                   count++;
//               }
//           }
//       }
//   }

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
      
//             if (arr[i] > arr[j] && arr[j] > arr[k]) {
//                 count++;
//             }
//         }
//     }
// }

//   return count;
// }


/*
5, 4, 3
5, 4, 2
5, 4, 1
5, 3, 2
5, 3, 1
5, 2, 1
4, 3, 2
4, 3, 1
4, 2, 1
3, 2, 1

*/

// Test cases
console.log(countDecreasingTriplets([5, 4, 3, 2, 1])); // Expected output: 10
console.log(countDecreasingTriplets([-1, -2, -3, 4])); // Expected output: 1
console.log(countDecreasingTriplets([1, 2, 3, 4, 5])); // Expected output: 0 (No combinations)


// Write a function that returns the maximum possible consecutive alternating odd and even (or even and odd) numbers. Minimum possible length is 2. If there’s none return [].

// Test cases
console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: [6, 7, 12, 11]

// Write a function that returns the longest consecutive numbers that are factors of the given target number. 
// Test cases
console.log(longestConsecutiveFactors([1, 2, 11, 12, 5, 4], 60)); // Expected: [12, 5, 4]
console.log(longestConsecutiveFactors([1, 2, 3, 4, 5, 6], 12)); // Expected: [1, 2, 3, 4]
console.log(longestConsecutiveFactors([10, 15, 20, 25, 30], 150)); // Expected: [10, 15]
console.log(longestConsecutiveFactors([1, 3, 7, 9], 21)); // Expected: [1, 3, 7]
console.log(longestConsecutiveFactors([2, 4, 6, 8, 10], 40)); // Expected: [2, 4]