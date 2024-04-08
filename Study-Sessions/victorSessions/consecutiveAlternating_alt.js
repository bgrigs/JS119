// # Write a function that returns the maximum possible consecutive alternating odd and even (or even and odd) numbers. Minimum possible length is `2`. If there’s none return `[]`. 

function longestAlternatingSubarray(array) {
  let maxConsecutive = [];
  let consecutive = [];

  for (let idx = 0; idx < array.length; idx++) {
    let currentElem = array[idx];
    let previousElem = consecutive[consecutive.length - 1];
  
    if (isOdd(previousElem) && !isOdd(currentElem)) consecutive.push(currentElem);
    else if (!isOdd(previousElem) && isOdd(currentElem)) consecutive.push(currentElem);
    else consecutive = [currentElem];

    if (consecutive.length > maxConsecutive.length) maxConsecutive = consecutive;
  }


  return maxConsecutive.length > 1 ? maxConsecutive : [];
}

function isOdd(num) {
  return num % 2 === 1;
}

console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: [6, 7, 12, 11] 
console.log(longestAlternatingSubarray([1, 2, 3, 7, 8, 5, 4])); // Expected: [7, 8, 5, 4]
