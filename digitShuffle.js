// Kaushal works at a company called MoEngage, and his boss has given him a task. She hands him a piece of paper with a positive integer N written on it and says, "I want you to determine if it is possible to rearrange the digits of N and obtain a multiple of 5.” For example, when N=108, we can rearrange its digits to construct 180=36⋅5 which is a multiple of 5.

// Write a program to help Kaushal find if a number can be rearranged to obtain a multiple of 5.

let n = 25;
console.log(isMultipleOfFive(n));

function isMultipleOfFive(n) {
  const digits = n.toString().split("");
  return digits.includes("5") || digits.includes("0");
}
