// Given an unsorted array arr having n number of elements . Complete bubbleSort() function so that array can be sorted.

function main(arr) {
  let n = arr.length;
  console.log(bubbleSort(arr, n));
}
function swap(arr, xp, yp) {
  let temp = arr[xp];
  arr[xp] == arr[yp];
  arr[yp] = temp;
}

function bubbleSort() {
  let i, j;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; i++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

let inputArray = [5, 3, 8, 1, 1];
main(inputArray);
