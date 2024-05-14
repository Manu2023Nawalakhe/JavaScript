// A group of friends went on a picnic to a park where they found a circular fountain with a statue in the center. They were curious to find out if a small toy boat they had would fit inside the fountain. Write a JavaScript program to help them determine if the boat, represented by a point, lies strictly inside the circle formed by the fountain.

// Can you write a JavaScript program to check whether a given point lies strictly inside a given circle?

let x = 0;
let y = 0;
let r = 5;
let a = 1;
let b = 1;

console.log(checkAPoint(a, b, x, y, r));

function checkAPoint(a, b, x, y, r) {
  let dist_points = (a - x) * (a - x) + (b - y) * (b - y);

  r *= r;

  if (dist_points < r) {
    return true;
  }
  return false;
}
