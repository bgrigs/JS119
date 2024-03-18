function greatestProduct(input) {
  const CONSECUTIVE_LIMIT = 5;
  let numStringsArr = input.split("");
  let numArr = numStringsArr.map(elem => Number(elem));
  let products = [];

  for (let idx = 0; idx <= numArr.length - CONSECUTIVE_LIMIT; idx++) {
    let product = numArr.slice(idx, idx + CONSECUTIVE_LIMIT).reduce((accum, number) => accum * number);
    products.push(product);
  }

  return Math.max(...products);
}

console.log(greatestProduct("92494737828244222221111111532909999"), 5292);
console.log(greatestProduct("92494737828244222221111111532909999"), 5292);
console.log(greatestProduct("02494037820244202221011110532909999"), 0);
console.log(greatestProduct("123456"), 720);