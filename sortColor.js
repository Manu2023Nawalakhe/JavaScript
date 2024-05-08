// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

let sortColors = function (nums) {
  let zero = 0;
  let one = 0;
  let two = 0;
  for (let n of nums) {
    n === 0 ? zero++ : n === 1 ? one++ : two++;
  }
  for (let i = 0; i < nums.length; i++) {
    i < zero ? (nums[i] = 0) : i < zero + one ? (nums[i] = 1) : (nums[i] = 2);
  }
  return nums;
};

const nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));
