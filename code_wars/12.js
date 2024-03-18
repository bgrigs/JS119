// Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

// List size is at least 2 .

// List's numbers will only positives (n > 0) .

// Repetition of numbers in the list could occur .

// The newer list's sum should equal the closest prime number .

// Input >> Output Examples
// 1- minimumNumber ({3,1,2}) ==> return (1)
// Explanation:
// Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make the sum of the List equal the closest prime number (7) .

// 2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
// Explanation:
// Since , the sum of the list's elements equal to (32) , the minimum number to be inserted to transform the sum to prime number is (5) , which will make the sum of the List equal the closest prime number (37) .

// 3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
// Explanation:
// Since , the sum of the list's elements equal to (189) , the minimum number to be inserted to transform the sum to prime number is (2) , which will make the sum of the List equal the closest prime number (191) .

/*
input: array
output: number (positive?)

algo:
  - declare a var called sum and assign to all of the elements in the array together
  - check if sum is a prime number
    - if so, return 0
  - else, add one to the sum and check if that is a prime number
     - declare a var newSum and assign to sum
     - while newSum is not a prime number
      - add the variable 1 to newSum and check if it's now a prime number
    - return newSum - sum


Helper function isPrimeNumber
  - if sum === 2, return true

  - declare a var divideBy and init to 2
  - while divide by is less than sum,
    - if the sum % divideBy === 0
      - return false
    - else, add 1 to divideBy
  - default return = true
*/

function minimumNumber(numbers){
  let sum = numbers.reduce((accum, elem) => accum + elem, 0);

  if (isPrimeNumber(sum)) return 0;

  let newSum = sum;

  while (true) {
    newSum += 1;
    if (isPrimeNumber(newSum)) break;
  }

  return newSum - sum;
}

function isPrimeNumber(sum) {
  if (sum === 2) return true; 

  let divideBy = 2;

  while (divideBy < sum) {
    if (sum % divideBy === 0) return false; 
    divideBy += 1;
  }

  return true; 
}


console.log(minimumNumber([3,1,2]),1);
console.log(minimumNumber([2,12,8,4,6]),5);
console.log(minimumNumber([50,39,49,6,17,28]),2);
console.log(minimumNumber([5,2]),0);
console.log(minimumNumber([1,1,1]),0);
