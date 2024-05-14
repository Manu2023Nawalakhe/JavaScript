// There were three friends named A, B, and C. They were all very competitive and loved to compete with each other in everything they did.

// One day, they decided to find out who among them was the second most important person in their group. They knew that the first most important person was whoever won their competitions, but they were unsure who would be the second most important.

// To determine this, they came up with a game. They each had to pick a number, and the person who chose the second largest number would be declared the second most important person in the group. Write a program to find the second largest number in a, b, c to find the second most important among A, B, C.

let a = 5;
let b = 10;
let c = 7;

const secondImportant = function (a, b, c) {
  if ((a > b && a < c) || (a > c && a < b)) {
    return a;
  } else if ((b > a && b < c) || (b > c && b < c)) {
    return b;
  } else if ((c > a && c < b) || (c > b && c < a)) {
    return c;
  } else {
    return 0;
  }
};
