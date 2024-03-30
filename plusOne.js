// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.Increment the large integer by one and return the resulting array of digits.

const plusOne = function (digits) {
  let digit_length = digits.length;
  let i = digit_length - 1;
  while (digits[i] === 9 && i >= 0) {
    i -= 1;
  }
  if (i == -1) {
    let results = Array(digit_length + 1).fill(0);
    results[0] = 1;
    return results;
  }
  let results = Array(digit_length).fill(0);
  results[i] = digits[i] + 1;

  for (let j = i - 1; j >= 0; j--) {
    results[j] = digits[j];
  }
  return results;
};
const array = [1, 2, 3];
console.log(plusOne(array));
