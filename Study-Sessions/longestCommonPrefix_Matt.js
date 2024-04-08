function commonPrefix(arr) {
  arr.sort((a, b) => a.length - b.length)
  let result = ''
  
  let shortest = arr[0]
  
  for(let i = 1; i <= shortest.length; i++) {
    let substr = shortest.substring(0, i)
    if(arr.every(el => el.startsWith(substr))) {
      result = substr
    }
  }

  return result
}

// Test Cases
console.log(commonPrefix(['flower', 'flow', 'flight']) === 'fl'); // true
console.log(commonPrefix(['dog', 'racecar', 'car']) === ''); // true
console.log(
  commonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters'
); // true
console.log(commonPrefix(['throne', 'dungeon']) === ''); // true
console.log(commonPrefix(['throne', 'throne']) === 'throne'); // true