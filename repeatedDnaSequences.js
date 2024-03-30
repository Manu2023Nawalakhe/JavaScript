/*The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.*/

const findRepeatedDnaSequence = function (s) {
  let map = {};
  let res = [];
  for (let i = 0; i <= s.length - 10; i++) {
    let s10 = s.substring(i, i + 10);
    if (!map[s10]) map[s10] = 1;
    else map[s10] += 1;
    if (map[s10] === 2) res.push(s10);
  }
  return res;
};
let inputString = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
console.log(findRepeatedDnaSequence(inputString));
