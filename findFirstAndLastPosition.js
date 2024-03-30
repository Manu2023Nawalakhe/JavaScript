/*Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.*/

var searchRange = function (nums, target) {
  let ans = [-1, -1];
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      while (nums[low] != target) {
        low++;
      }
      while (nums[high] != target) {
        high--;
      }
      ans[0] = low;
      ans[1] = high;

      return ans;
    } else if (target > nums[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
};

// Example usage
var nums = [5, 7, 7, 8, 8, 10]; // Example nums array
var target = 8; // Example target value
console.log(searchRange(nums, target));
