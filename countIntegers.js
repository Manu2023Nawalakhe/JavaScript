// Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

// The digit sum of a positive integer is the sum of all its digits.

let num = 123;

console.log(countEven(num));

let countEven = function (num) {
  let count = 0;
  for (let i = 2; i <= num; i++) {
    if (isEven(i) % 2 == 0) {
      count++;
    }
  }
  return count;
};

const isEven = (c) => {
  let sum = 0;
  while (c > 0) {
    sum += c % 10;
    c = Math.floor(c / 10);
  }
  return sum;
};
