/* You have to create a function that takes a positive integer number 
and returns the next bigger number formed by the same digits

12 ==> 21
513 ==> 531
2017 ==> 2071
// If no bigger number can be composed using those digits, return -1

9 ==> -1
111 ==> -1
531 ==> -1

Input: number
Output: number 
  - return the NEXT bigger number that uses the same digits from the given number
    - if there is no bigger number avail, return -1

- declare a variable numberArr and assign to makeNumArr(number)
- declare a variable nextBiggerNum; 

- declare a var nextNumber and assign to number + 1 
- while true
  - declare a var nextNumberArr and assign to makeNumberArr(nextNumber)
  - if each element of nextNumberArr sorted is equal to each element of numberArr sorted
    - assign nextBiggerNum to nextNumber
    - break 

helper function makeNumArr
  - declare a variable numberArr
  - conver the number into a string
  - split the string by char
  - iterate through numberArr and convert each elem back into a Number. reassign numberArr to this value 
*/

function nextBiggerNum(number) {
  if (number < 10) return -1;
  let numberArr = makeNumberArr(number);
  let numberArrDescending = numberArr.slice().sort((a,b) => b - a);
  if (hasSameDigits(numberArr, numberArrDescending)) return -1;
  
  let nextBiggerNum;
  let nextNumber = number + 1;

  while (true) {
    let nextNumberArr = makeNumberArr(nextNumber);
    let nextNumberArrDescending = nextNumberArr.slice().sort((a, b) => b - a);
    if (hasSameDigits(numberArrDescending, nextNumberArrDescending)) {
      nextBiggerNum = nextNumber;
      break;
    }
    nextNumber += 1;
  }

  return nextBiggerNum;
}

function makeNumberArr(number) {
  return String(number).split("").map(elem => Number(elem));
}

function hasSameDigits(arr1, arr2) {
  return arr1.every((_, idx) => arr1[idx] === arr2[idx]);
}

console.log(nextBiggerNum(9) === -1) // true 
console.log(nextBiggerNum(111) ===  -1) // true
console.log(nextBiggerNum(531) ===  -1) // true
console.log(nextBiggerNum(12) === 21) // true
console.log(nextBiggerNum(513) === 531) // true
console.log(nextBiggerNum(2017) === 2071) // true
console.log(nextBiggerNum(123456789) ===  123456798) // true