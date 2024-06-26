
// Sword-Fighting Math
// Medium

// In a faraway kingdom, there lived a group of knights who loved to challenge each other in sword fights. However, one day, they decided to put down their swords and engage in a new challenge - the challenge of creating triangles.

// The knights were given an array of positive integers, but the catch was that they had to find the number of triangles that could be formed with three different array elements as three sides of triangles. They were told that for a triangle to be possible from three values, the sum of any of the two values (or sides) must be greater than the third value (or third side).

// The knights were puzzled at first, but soon they realized that they could use their knowledge of sword-fighting to solve the challenge. They imagined each integer in the array as a length of a sword, and then tried to find the possible combinations of swords that could form a triangle.

let arr = [4, 6, 3, 7, 9, 5];
let n = 6;
console.log(findNumberOfTriangles(arr, a));

function findNumberOfTriangles(arr, n) {
  arr.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < n - 2; ++i) {
    let k = i + 2;

    for (let j = i + 1; j < n; ++j) {
      while (k < n && arr[i] + arr[j] > arr[k]) {
        ++k;
      }
      if (k > j) {
        count += k - j - 1;
      }
    }
  }
  return count;
}
