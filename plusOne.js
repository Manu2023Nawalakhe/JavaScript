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
