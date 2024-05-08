// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

const missingNumber = function (nums) {
  let ans = nums.length;

  for (let i = 0; i < nums.length; ++i) {
    ans ^= i ^ nums[i];
  }
  return ans;
};

const nums = [3, 0, 1];
console.log(missingNumber(nums));
