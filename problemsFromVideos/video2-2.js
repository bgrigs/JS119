/*
Given an array of strings made only from lowercase letters, return an array of all the chars that show up in all strings within the given array (including duplicates)

For ex, if a char occurs 3x in all strings but not 4 times, you need to include that char 3x in the final answer 

Input: array (of strings)
Output: an array
  - return an empty array if there are no common chars

Algo: 
  - declare a var chars = []

  - iterate through given array
    - iterate thorugh the chars of the elem at idx 0
      - if all of the remaining elements do not include that char, continue 
      - else  
        - add that char to chars array
        - find indexOf that char in the subsequent elements 
          - remove that char in that idx, reassign the string/element to this new string

  - return chars
*/

// function commonChars(arr) {
//   let chars = [];
//   let firstElement = arr[0];
//   let remainingElements = arr.slice(1);

//   for (let char of firstElement) {
//     if (!remainingElements.every(str => str.includes(char))) continue;
//     chars.push(char);
//     remainingElements.forEach((str, idx) => {
//       let idxCharToRemove = str.indexOf(char);
//       remainingElements[idx] = str.slice(0, idxCharToRemove) + str.slice(idxCharToRemove + 1);
//     });
//   }

//   return chars;
// }

function commonChars(arr) {
  let initialCount = {};

  // create a frequency map for the first string
  arr[0].split('').forEach(char => {
    initialCount[char] = (initialCount[char] || 0) + 1;
  });

  let result = [];

  // iterate over each character in the frequency map
  Object.keys(initialCount).forEach(char => {
    let minFrequency = initialCount[char]; 

    // check if the character is common to all strings with 'every'
    let isCommon = arr.slice(1).every(str => {
      let charFrequencyInStr = str.split('').filter(el => el === char).length;

      // update min frequency based on this string
      minFrequency = Math.min(minFrequency, charFrequencyInStr);
      return charFrequencyInStr > 0; // ensure the character exists in this string
    });

 if (isCommon && minFrequency > 0) {
            for (let i = 0; i < minFrequency; i++) {
                result.push(char);
            }
        }
    });

    return result;
}

console.log(commonChars(['a', 'b'])) // []
console.log(commonChars(['ab', 'bc'])) // ['b']
console.log(commonChars(['bella', 'label', 'roller'])) // ['e', 'l', 'l'];
console.log(commonChars(['cool', 'lock', 'cook'])) // ['c', 'o'];
console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])) // ['o']
console.log(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzzz'])) // []


// function commonChars(arr) {
//   let chars = [];
//   let firstElement = arr[0];
//   let remainingElements = arr.slice(1);

//   for (let char of firstElement) {
//     if (!remainingElements.every(str => str.includes(char))) continue;
//     chars.push(char);
//     remainingElements.forEach((str, idx) => {
//       let strArr = str.split("")
//       let charToRemove = strArr.indexOf(char);
//       strArr.splice(charToRemove, 1);
//       remainingElements[idx] = strArr.join("");
//     });
//   }

//    return chars;
// }


// alternative method that uses sort and slice instead of splice for the str/elem reassignment. other solutions are better
// function commonChars(arr) {
//   let chars = [];
//   let firstElementSortedByChar = arr[0].split("").sort().join("");
//   let remainingElements = arr.slice(1);
//   let remainingElementsSortedByChar = remainingElements.map(str => {
//     return str.split("").sort().join("")
//   });

//   for (let char of firstElementSortedByChar) {
//     if (!remainingElementsSortedByChar.every(str => str.includes(char))) continue;
//     chars.push(char);
//     remainingElementsSortedByChar.forEach((str, idx) => {
//       let startFrom = str.indexOf(char) + 1;
//       remainingElementsSortedByChar[idx] = str.slice(startFrom);
//     })
//   }

//    return chars;
// }




