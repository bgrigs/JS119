/*
-Accept two string arguments
-Initialize a variable to hold the result (empty string)
-WHILE iterator < length of string, iterate through each character
-IF the character is present in both strings, continue iterating 
-IF a character is present in one string but not the other, concatenate result with the character 
-Return result (should PRINT true)
*/

function uniqueStringCharacters(str1, str2) {
  let result = '';

  for (let i = 0; i < str1.length; i += 1) {
    if (!str2.includes(str1[i])) {
      result += str1[i];
    }
  }

  for (let i = 0; i < str2.length; i += 1) {
    if (!str1.includes(str2[i])) {
      result += str2[i];
    }
  }

  return result;
}

console.log(uniqueStringCharacters("xyab","xzca") === "ybzc");
console.log(uniqueStringCharacters("a","z") === "az");
console.log(uniqueStringCharacters("abcd","de") === "abce");
console.log(uniqueStringCharacters("abc","abba") === "c");
console.log(uniqueStringCharacters("xyz","zxy") === "");
