// Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

const majorityElement = function (nums) {
  let count = 0;
  let res = 0;
  for (let num of nums) {
    if (count === 0) {
      res = num;
    }
    if (res === 0) {
      count++;
    } else {
      count--;
    }
  }
  return res;
};
const arra = [2, 2, 3, 3, 2, 1, 6, 7];
console.log(majorityElement(arra));
