let largestInteger = function (num) {
  num = num.toString();
  let even = [];
  let odd = [];
  let result = "";
  for (let i = 0; i < num.length; i++) {
    num[i] % 2 === 0 ? even.push(num[i]) : odd.push(num[i]);
  }
  if (even.length > 1) even.sort((a, b) => +a - +b);
  if (odd.length > 1) odd.sort((a, b) => +a - +b);

  for (let i = 0; i < num.length; i++) {
    if (+num[i] % 2 === 0 && even.length) {
      result += even.pop();
    } else if ((+num[i] % 2 === 0) !== 0 && odd.length) {
      result += odd.pop();
    } else {
      result += num[i];
    }
  }
  return result;
};
const num = 982345;
console.log(largestInteger(num));
