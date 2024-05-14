// You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.
// Return true if the square is white, and false if the square is black.

// The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

let coordinates = "a1";

console.log(squareIsWhite(coordinates));

let squareIsWhite = function (coordinates) {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const [l, n] = coordinates.split("");
  if (
    (letters.indexOf(l) % 2 == 0 && n % 2 == 0) ||
    (letters.indexOf(l) % 2 == 1 && n % 2 == 1)
  ) {
    return true;
  }
  return false;
};
