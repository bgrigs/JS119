// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

/*
In: array of integers
Out: an array with the two #s that are closest together in value

Data structure: nested array with an object? 
[[5, 25, {difference: 20}], [5, 15, {difference: 10}]]

Algo: 
Helper function subtractNumbers
- create a var called subtractions and assign it to an empty array
- iterate through each elem of the original array
  - create a nested loop that subtracts each element from the element we are iterating over 
    - only perform this operation IF the two elements do not have the same indx #
    - if the difference is a negative number, multiply it by -1
    - push the following to subtractions: [currentElem, subtractElem, {difference: currentElem - subtractElem}]
  -return subtractions

Sort nested array by the [2].difference of each nested array is ascending order
  - return a copy of the first element, including only elements 0 and 1
*/

function closestNumbers(arr) {
  let subtractions = subtractNumbers(arr);
  let sortedSubtractions = subtractions.slice().sort((a, b) => a[2].difference - b[2].difference);
  return sortedSubtractions[0].slice(0, 2);
}

function subtractNumbers(arr) {
  let subtractions = [];

  arr.forEach((elem, currentElemIdx) => {
    for (let idx = 0; idx < arr.length; idx++) {
      let differenceResult;
      let subtractionElem = arr[idx];
      if (currentElemIdx !== idx) {
        differenceResult = elem - subtractionElem;
        if (differenceResult < 0) differenceResult *= -1;
        subtractions.push([elem, subtractionElem, {difference: differenceResult}]);
      }
    }
  });

  return subtractions;
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]