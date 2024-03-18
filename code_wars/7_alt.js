function isPangram(string){
  let lettersCount = makeLettersObj();

  string.split("").forEach(char => {
    let letter = char.toLowerCase();
    if (Object.keys(lettersCount).includes(letter)) lettersCount[letter] += 1;
  })

  return Object.values(lettersCount).every(count => count > 0);
}

function makeLettersObj() {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  return letters.split("").reduce((accum, elem) => {
    accum[elem] = 0;
    return accum;
  }, {})
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."), true)
console.log(isPangram("This is not a pangram."), false);