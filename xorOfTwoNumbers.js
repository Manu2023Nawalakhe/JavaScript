// XOR of two numbers is a bitwise operator that returns 1 if the corresponding bits of its operands are different, and 0 if they are the same. For example, the XOR of 5 (in binary 101) and 3 (in binary 011) is 6 (in binary 110), because the first and third bits are different in the operands.

// Once upon a time, there was a problem where we had to find the XOR of two integers without using the XOR operator. This was a tricky problem because XOR is a commonly used operator for finding the XOR of two integers. However, we had to find a solution without using it.

let x = 5;
let y = 3;

console.log(myXOR(x, y));

function myXOR(x, y) {
  return (x & ~y) | (~x & y);
}
