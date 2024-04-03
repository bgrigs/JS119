// Problem 16
// Create a function that returns the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. You may assume that the input string contains only alphanumeric characters.

/*
Input: string
Output: number of letters and numbers that occur more than once in the string 

Algo: 
  - declare a var countChars and init to {}

  - split string into an array and iterate though each char
    - turn each char into lowercase
    - if char is already present in countChars, add 1 to the value. else init value to 1
  
  - iterate through the values of the countChars object
    - return number of values that have a value > 1 
*/

function distinctMultiples(string) {
  let countChars = {};

  for (let char of string) {
    char = char.toLowerCase();
    countChars[char] = countChars[char] + 1 || 1;
  }

  return Object.values(countChars).reduce((count, value) => {
    if (value > 1) count += 1;
    return count;
  }, 0);
}

const p = console.log;
p(distinctMultiples('xyz') === 0);              //# (none)
p(distinctMultiples('xxyypzzr') === 3);         //# x, y, z
p(distinctMultiples('xXyYpzZr') === 3);         //# x, y, z
p(distinctMultiples('unununium') === 2);        //# u, n
p(distinctMultiples('multiplicity') === 3);     //# l, t, i
p(distinctMultiples('7657') === 1);             //# 7
p(distinctMultiples('3141592653589793') === 4); //# 3, 1, 5, 9
p(distinctMultiples('2718281828459045') === 5); // # 2, 1, 8, 4, 5
// The above tests should each print true.