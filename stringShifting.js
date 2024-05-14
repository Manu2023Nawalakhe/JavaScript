// Rakhul loves to play with strings. He has a string S consisting of lowercase English characters and defined functions left shift L(X) and right shift R(X) as follows.

// L(X) is defined as shifting all characters of string X one step towards left and moving the first character to the end. R(X) is defined as shifting all characters of string X one step towards the right and moving the last character to the beginning. For example, L("abcd") = "bcda" and R("abcd") = "dabc"

// Rahul wants to find out whether there exists a string S such that both L(V)=S and R(V)=S holds.

// Write a programs that outputs “YES” if such a string exists otherwise “NO”
let s = "example";
console.log(lShift(s) === rShift(s) ? "YES" : "NO");

function lShift(s) {
  return s.substr(1) + s.charAt(0);
}
function rShift(s) {
  return s.charAt(s.length - 1) + s.substr(0, s.length - 1);
}
