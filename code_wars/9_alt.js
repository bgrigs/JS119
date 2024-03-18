function sumMultiples3and5(limit) {
  if (limit < 0) return 0;
  let sum = 0;

  for (let number = 1; number < limit; number++) {
    if (number % 3 === 0 || number % 5 === 0) sum += number;
  }
  
  return sum;
}

console.log(sumMultiples3and5(10)) // 23