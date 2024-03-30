/*You have a list arr of all integers in the range [1, n] sorted in a strictly increasing order. Apply the following algorithm on arr:

Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
Keep repeating the steps again, alternating left to right and right to left, until a single number remains.
Given the integer n, return the last number that remains in arr.*/

const lastRemaining = function (n) {
  if (n === 1) return 1;
  let remaining = lastRemaining(Math.floor(n / 2));
  return n % 2 === 0 ? 2 * (n / 2 - remaining) + 1 : 2 * remaining;
};

// Example usage
var n = 9; // Example value for n
console.log(lastRemaining(n));
