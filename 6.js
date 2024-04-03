// Problem 6
// Create a function that takes a string argument and returns a hash in which the keys represent the letters in the string, and the values represent how often the corresponding letter occurs in the string.

/*
Input: string
Output: an object 
  - keys represent letters
  - values represent how often the letter occurs

Rules: 
  - ignore spaces, punctuation, uppercase letters

Algo:
  - declare a variable countLowerCaseLetters = {}

  - iterate through each char of the string
    - if the char is a LOWERCASE letter, either add the letter as a key to the object or add 1 to its value if it's already present

Helper function isLowerCaseLetter()
  letter >= 'a' && <= 'z'
*/

function countLetters(string) {
  let countLowerCaseLetters = {};

  for (let char of string) {
    if (isLowerCaseLetter(char)) {
      countLowerCaseLetters[char] = countLowerCaseLetters[char] + 1 || 1;
    }
  }

  return countLowerCaseLetters;
}


function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

const p = console.log;
const objeq = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    p(key, obj1[key], obj2[key]);
    if (! keys2.includes(key)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

let expected = {'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1};
p(objeq(countLetters('woebegone'), expected));

expected = {'l': 1, 'o': 1, 'w': 1, 'e': 4, 'r': 2,
            'c': 2, 'a': 2, 's': 2, 'u': 1, 'p': 2};
p(objeq(countLetters('lowercase/uppercase'), expected));

expected = {'u': 1, 'o': 1, 'i': 1, 's': 1};
p(objeq(countLetters('W. E. B. Du Bois'), expected));

p(objeq(countLetters('x'), {'x': 1}));
p(objeq(countLetters(''), {}));
p(objeq(countLetters('!!!'), {}));
// The above tests should each print true.