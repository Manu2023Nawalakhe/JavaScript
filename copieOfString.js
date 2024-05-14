let str = "hello";
let n = 3;

console.log(stringCopies(str, n));

function stringCopies(str, n) {
  if (n < 0) {
    return false;
  } else {
    return str.repeat(n);
  }
}
