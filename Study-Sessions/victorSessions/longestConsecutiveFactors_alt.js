// Write a function that returns the longest consecutive numbers that are factors of the given target number. 

// factor: a number that divides another number or expression evenly


function longestConsecutiveFactors(array, num) {
  let longest = [];
  let consecutive = []

  for (let idx = 0; idx < array.length; idx++) {
    let elem = array[idx];
    if (num % array[idx] === 0) {
      consecutive.push(elem);
      if (consecutive.length > longest.length) longest = consecutive;
    } else consecutive = [];
  }

  return longest;
}

// Test cases
console.log(longestConsecutiveFactors([1, 2, 11, 12, 5, 4], 60)); // Expected: [12, 5, 4]
console.log(longestConsecutiveFactors([1, 2, 3, 4, 5, 6], 12)); // Expected: [1, 2, 3, 4]
console.log(longestConsecutiveFactors([10, 15, 20, 25, 30], 150)); // Expected: [10, 15]
console.log(longestConsecutiveFactors([1, 3, 7, 9], 21)); // Expected: [1, 3, 7]
console.log(longestConsecutiveFactors([2, 4, 6, 8, 10], 40)); // Expected: [2, 4]