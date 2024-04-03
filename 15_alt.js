// Create a function that takes a string argument that consists entirely of numeric digits and computes the greatest product of four consecutive digits in the string. The argument will always have more than 4 digits.

/*
Input: string (numeric digits)
Output: number
  - computes the product of 4 consecutive digits in the string
  - arg will always have more than 4 digits
*/

function greatestProduct(string) {
  let products = [];

  let arrayOfNums = string.split("").map(char => Number(char));

  for (let startingIdx = 0; startingIdx < arrayOfNums.length - 3; startingIdx++) {
    let arrayToMultiply = arrayOfNums.slice(startingIdx, startingIdx + 4);
    let product = arrayToMultiply.reduce((accum, elem) => {
      accum *= elem;
      return accum;
    });
    products.push(product);
  }

  return products.sort((a,b) => b - a)[0];
}

const p = console.log;
p(greatestProduct('23456') === 360);      //# 3 * 4 * 5 * 6
p(greatestProduct('3145926') === 540);    //# 5 * 9 * 2 * 6
p(greatestProduct('1828172') === 128);    //# 1 * 8 * 2 * 8
p(greatestProduct('123987654') === 3024); //# 9 * 8 * 7 * 6
// The above tests should each print true.
