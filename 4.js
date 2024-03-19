// Create a function that takes an array of integers as an argument and returns an array of two numbers that are closest together in value. If there are multiple pairs that are equally close, return the pair that occurs first in the array.

/*
Input: array (of integers)
Output: array (of 2 numbers)
  - the two numbers that are closest together in value 

Declare a variable called pairs and init to []

Iterate through the array
  -declare a var idx and init to 0
  - Outer loop will run as long as idx < array.length - 1
    - Inner loop will run as long as secondIdx < array.length
      - push [firstIndex, secondIndex] to pairs
          
Helper function that sorts the pairs array
[[12, 22], [12, 7], [12, 17], [22, 7], [22, 17], [7, 17]]
  - sort by the difference
  - if the difference is less than 0, convert the difference to a pos number
*/

function closestNumbers(array) {
  let pairs = [];

  for (let firstIndex = 0; firstIndex < array.length - 1; firstIndex++) {
    for (let secondIndex = firstIndex + 1; secondIndex < array.length; secondIndex++) {
      pairs.push([array[firstIndex], array[secondIndex]]);
    }
  }

  return sortByDifference(pairs)[0];
}

function sortByDifference(pairs) {
  return pairs.sort((a,b) => {
    let differenceA = a[0] - a[1];
    let differenceB = b[0] - b[1];
    if (differenceA < 0) differenceA *= -1;
    if (differenceB < 0) differenceB *= -1;
    return differenceA - differenceB;
  });
}

// ExamplesCopy Code
const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));
// The above tests should each print true.