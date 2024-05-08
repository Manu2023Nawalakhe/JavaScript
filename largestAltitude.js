// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

const largestAltitude = function (gain) {
  let previous = 0;
  let biggest = 0;
  for (let i = 0; i < gain.length; i += 1) {
    previous += gain[i];
    if (previous > biggest) biggest = previous;
  }
  return biggest;
};
let gain = [-5, 1, 5, 0, -7];
console.log(largestAltitude(gain));
