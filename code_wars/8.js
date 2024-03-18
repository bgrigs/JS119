// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

/*
- Input: two strings
- Output: boolean
  - true if a portion of str1 characters can be rearranged to match str2
    - else return false

('rkqodlw', 'world') ==> True
  -k, q, isn't present in 2nd arg

Data structure: object

Algo: 
  - str2LetterCount = create an object that stores how many times each letter in str2 appears
  - str1LetterCount = do the same for str1

  - for each key in str2LetterCount, str1LetterCount must have the same value for that same key
    - return true if the values are the same
      - else false 
*/

function scramble(str1, str2) {
  let str1LetterCount = letterCount(str1)
  let str2LetterCount = letterCount(str2);

  return Object.keys(str2LetterCount).every(letter => {
    return str1LetterCount[letter] >= str2LetterCount[letter];
  });
}

function letterCount(str) {
  return str.split("").reduce((accum, elem) => {
    accum[elem] = accum[elem] + 1 || 1;
    return accum;
  }, {});
}

console.log(scramble('rkqodlw',           'world'      ), true );
console.log(scramble('cedewaraaossoqqyt', 'codewars'   ), true );
console.log(scramble('katas',             'steak'      ), false);
console.log(scramble('scriptjavx',        'javascript' ), false);
console.log(scramble('scriptingjava',     'javascript' ), true );
console.log(scramble('scriptsjava',       'javascripts'), true );
console.log(scramble('javscripts',        'javascript' ), false);
console.log(scramble('jscripts',          'javascript' ), false);
console.log(scramble('aabbcamaomsccdd',   'commas'     ), true );
console.log(scramble('commas',            'commas'     ), true );
console.log(scramble('sammoc',            'commas'     ), true )