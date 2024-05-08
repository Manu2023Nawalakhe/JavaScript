let side1 = 3;
let side2 = 4;
let side3 = 5;

console.log(getTriangaleArea(side1, side2, side3));

function getTriangaleArea(side1, side2, side3) {
  const s = (side1 + side2 + side3) / 2;
  const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
  return area;
}
