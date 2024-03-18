/*
Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)

Input: array
Output: number

Data structure: object to store # of each glove color

Algo:
  - declare a var called count and init to {}
  - iterate through the original array
    - each color will be a key, add 1 if the key is already there else inti to 1

  - declare a var called pairs and init to 0

  - iterate through the values of the object
    - divide each value by 2 and round to the nearest #. 
      - add that number to count

  - return count 
*/

function numberOfPairs(gloves){
  let count = {};  
  gloves.forEach(color => count[color] = count[color] + 1 || 1);

  let pairs = 0;
  Object.values(count).forEach(number => {
    pairs += Math.floor(number / 2);
  })
  
  return pairs;
}


console.log(numberOfPairs(["red", "green", "red", "blue", "blue", "blue"])); // 2