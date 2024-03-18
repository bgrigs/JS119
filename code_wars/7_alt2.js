function isPangram(string){
  let letters = 'abcdefghijklmnopqrstuvwxyz';

  return letters.split("").every(letter => {
    return string.split("").indexOf(letter) !== -1;
  })
}


console.log(isPangram("The quick brown fox jumps over the lazy dog."), true)
console.log(isPangram("This is not a pangram."), false);

/*
iterate through letters string

during each iteration, find out if that letter is present in the original string
*/