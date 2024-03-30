/*You are given two arrays, A and B, of equal size N. The task is to find the minimum value of A[0] * B[0] + A[1] * B[1] + .... + A[N-1] * B[N-1], where shuffling of elements of arrays A and B is allowed.*/

function minValue(A, B, N) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  let minSum = 0;
  for (let i = 0; i < N; i++) {
    minSum += A[i] * B[N - i - 1];
  }
  return minSum;
}
var N = 5; // Example value for N
var A = [1, 2, 3, 4, 5]; // Example array A
var B = [5, 4, 3, 2, 1]; // Example array B
console.log(minValue(A, B, N));
