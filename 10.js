// Problem 10
// Create a function that takes a string of digits as an argument and returns the number of even-numbered substrings that can be formed. For example, in the case of '1432', the even-numbered substrings are '14', '1432', '4', '432', '32', and '2', for a total of 6 substrings.

// If a substring occurs more than once, you should count each occurrence as a separate substring.

/*
Input: string (of digits)
Output: number (of even numbered substrings that can be formed)

Rules:
  - if a substring is seen more than once, count it as a separate substring
  - numbers can be reused 

1
14 
143
1432

4
43
432

3
32

2

Algo:
Declare a variable called count
  - iterate through the string using 2 loops, and push every possible substring to substrings
    - outer loop will capture the first element
    - inner loop will capture the "ending" element,(i.e this will enable the following: str.slice(firstIndex, secondIndex)
      - if Number(substring) is even, add 1 to count 

Return count 
*/

function evenSubstrings(str) {
  let count = 0; 

  for (let firstIndex = 0; firstIndex < str.length; firstIndex++) {
    for (let secondIndex = firstIndex + 1; secondIndex <= str.length; secondIndex++) {
      if (Number(str.slice(firstIndex, secondIndex)) % 2 === 0) count += 1;
    }
  }

  return count;
}

const p = console.log;
p(evenSubstrings('1432') === 6);
p(evenSubstrings('3145926') === 16);
p(evenSubstrings('2718281') === 16);
p(evenSubstrings('13579') === 0);
p(evenSubstrings('143232') === 12);
// The above tests should each print true.