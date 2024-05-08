// Complete the function linearSearch to perform linear search in an Array

const linearSearch = function (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      return i + 1;
    }
  }
  return -1;
};

var arr = [3, 1, 4, 1, 5, 9, 2, 6];
var target = 5;
