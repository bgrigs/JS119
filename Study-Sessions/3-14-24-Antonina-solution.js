function progressions(nums) {
  let count = 0;

  nums.slice(0, nums.length - 2).forEach((num, idx) => {
    nums.slice(idx + 1).forEach(nextNum => {
      let thirdNum = nextNum + (nextNum - num);
      if (nums.includes(thirdNum)) count += 1;
    });
  });

  return count;
}

// Test Cases
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10