// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// You must solve it in O(n) time complexity.

let findKthLargest = function (nums, k) {
  nums.sort((a, b) =>
    BigInt(a) < BigInt(b) ? 1 : BigInt(a) > BigInt(b) ? -1 : 0
  );
  return nums[k - 1];
};
let nums = [3, 2, 1, 5, 6, 4];
var k = 2;
console.log(findKthLargest(nums, k));
