/*An n-bit gray code sequence is a sequence of 2n integers where:

Every integer is in the inclusive range [0, 2n - 1],
The first integer is 0,
An integer appears no more than once in the sequence,
The binary representation of every pair of adjacent integers differs by exactly one bit, and
The binary representation of the first and last integers differs by exactly one bit.
Given an integer n, return any valid n-bit gray code sequence.*/

function grayCode(n) {
  const ans = [0];
  for (let i = 0; i < n; i++) {
    for (let j = ans.length - 1; j >= 0; j--) {
      ans.push(ans[j] | (1 << i));
    }
  }
  return ans;
}
const n = 3;
console.log(grayCode(n));
