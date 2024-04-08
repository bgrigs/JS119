// Given two arrays, return whether they are opposites of each other.
// That means both arrays are comprised only from elements a and b and the occurrences
// of those elements are swapped between the two arrays.

function isAntiArray(arr1, arr2) {
  if (arr1.length !== arr2.length || arr1.length <= 1) return false;

  let arr1Sorted = arr1.slice().sort();
  let a = arr1Sorted[0];
  let b = arr1Sorted[arr1Sorted.length - 1];

  if (a === b) return false;

  for (let idx = 0; idx < arr1.length; idx++) {
    if (arr1[idx] === a && arr2[idx] !== b || arr1[idx] === b && arr2[idx] !== a) return false; 
  }

  return true; 
}

console.log(isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"])); // true
console.log(isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"])); // true
console.log(isAntiArray([3.14, true, 3.14], [3.14, false, 3.14])); // false
console.log(isAntiArray([3.14, true, 3.14], [true, "3.14", true])); // false
console.log(isAntiArray([], [])); // false
console.log(isAntiArray([3.14], [3.14])); // false
console.log(isAntiArray([3.14], [false])); // false
console.log(isAntiArray([3.14, false, 3.14], [false, 3.14, true])); // false
console.log(isAntiArray([3.14, true], [3.14])); // false
console.log(isAntiArray([3.14, 3.14], [3.14, 3.14])); // false