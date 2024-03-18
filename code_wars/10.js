// Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

// For example:

// greatestProduct("123834539327238239583") // should return 3240
// The input string always has more than five digits.

/*
Input: string (of digits)
Output: number
  - the greatest product of five consecutive digits

Data stucture: array

Algo: 
  - declare a var called products and init to []
  - declar a var called numStringsArr and assign to = string split by char 
  - create a new var called numArr and assign to each elem of numStringsArr converted to a number

  - iterate through numArr
    - declare a var called limit and init to 5
    - multiply current num by the next num until we've multiplied 5 nums
    - push the final number to products

  - sort products in descending order
    - return element at idx 0
*/

function greatestProduct(input) {
  const CONSECUTIVE_LIMIT = 5;
  let numStringsArr = input.split("");
  let numArr = numStringsArr.map(elem => Number(elem));
  let products = [];


  for (let idx = 0; idx <= numArr.length - CONSECUTIVE_LIMIT; idx++) {
    let product = numArr.slice(idx, idx + CONSECUTIVE_LIMIT).reduce((accum, number) => accum * number);
    products.push(product);
  }

  return products.sort((a, b) => b - a)[0];
}

console.log(greatestProduct("92494737828244222221111111532909999"), 5292);
console.log(greatestProduct("92494737828244222221111111532909999"), 5292);
console.log(greatestProduct("02494037820244202221011110532909999"), 0);
console.log(greatestProduct("123456"));
