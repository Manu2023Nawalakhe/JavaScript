// You are a software engineer working for a large financial company. You have been tasked with developing a new algorithm that will sort large arrays of data. The company wants to use this algorithm to improve the performance of its trading systems. The problem is that sorting large arrays of data can be computationally expensive. You have to implement Merge Sort, a recursive algorithm that sorts an array by dividing it into smaller and smaller subarrays until they are sorted, and then merging the sorted subarrays back together.Your task is to complete the mergeSort() function, which takes three arguments: the unsorted array as arr, the start index (i.e., 0), and the end index (i.e., arr.length - 1).

function main(arr) {
  mergeSort(arr, 0, arr.length - 1);
  console.log(arr);
}

function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;
  var L = new Array(n1);
  var R = new Array(n2);
  for (var i = 0; i < n1; i++) L[i] = arr[l + i];
  for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
  var i = 0;
  var j = 0;
  var k = l;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function mergeSort(arr, l, r) {
  if (l >= r) return;
  var m = l + parseInt((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

// Example usage:
let inputArray = [5, 3, 8, 1, 2]; // Example input array
main(inputArray);
