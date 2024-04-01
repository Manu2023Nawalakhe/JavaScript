// Given an unsorted array arr having n number of elements . Complete selectionSort() function so that array can be sorted.

function main(arr) {
  selectionSort(arr, arr.length);
  console.log(arr);
}

function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function selectionSort(arr, n) {
  var i, j, min_idx;
  for (i = 0; i < n - 1; i++) {
    min_idx = i;
    for (j = i + 1; j < n; j++) if (arr[j] < arr[min_idx]) min_idx = j;
    swap(arr, min_idx, i);
  }
}

// Example usage:
let inputArray = [5, 3, 8, 1, 2]; // Example input array
main(inputArray);
