// Problem 7
// Create a function that takes an array of integers as an argument and returns the number of identical pairs of integers in that array. For instance, the number of identical pairs in [1, 2, 3, 2, 1] is 2: there are two occurrences each of both 2 and 1.

// If the array is empty or contains exactly one value, return 0.

// If a certain number occurs more than twice, count each complete pair once. For instance, for [1, 1, 1, 1] and [2, 2, 2, 2, 2], the function should return 2. The first array contains two complete pairs while the second has an extra 2 that isn't part of the other two pairs.

/*
Input: array of integers
Output: # of identical pairs of integers in the array
  - return 0 if the the array is empty or contains only one value

Algo:

- declare an var called pairs and init to {}

- iterate through each elem of the array
  - if an elem is already present as a key on the object, add to its value
    - otherwise, add the key to the object with a value of 1

{'1': 2, '2': 1, '3': 3}

  - turn the object values into an array
  - declare a var called count
    - divide the elem by 2 and add Math.floor(result) to count
*/

function pairs(array) {
  if (array.length <= 1) return 0;
  let pairs = {};

  array.forEach(number => {
    pairs[number] = pairs[number] + 1 || 1;
  })

  return Object.values(pairs).reduce((count, elem) => {
    count += Math.floor(elem / 2);
    return count; 
  }, 0)
}

const p = console.log;
p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3); 
p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
p(pairs([]) === 0);
p(pairs([23]) === 0);
p(pairs([997, 997]) === 1);
p(pairs([32, 32, 32]) === 1);
p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);