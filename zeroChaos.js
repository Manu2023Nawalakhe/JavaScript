// There was a magical array filled with random numbers. However, the array was plagued with zeros that were causing chaos and disorder. The wise wizard tasked with solving this problem, decided to push all the zeros to the end of the array, while keeping the order of all other elements the same.

// The wizard knew that he had to be efficient in his solution, as the array was quite large. He needed to find a way to achieve this in linear time complexity, without using any extra space

let arr = [0, 1, 0, 3, 12];
console.log(pushZerosToFund(arr));

function pushZerosToFund(arr) {
  let n = arr.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
  }
  while (count < n) {
    arr[count++] = 0;
  }
  return arr;
}
