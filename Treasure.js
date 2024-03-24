/*You have been tasked with helping a group of adventurers on a quest to retrieve a treasure. In order to reach the treasure, the adventurers must cross a treacherous mountain pass. They have to carry all their supplies with them, including food and water. They have a list of all the supplies they need to bring, along with the weight of each item in arr array.

Your task is to help the adventurers calculate the total weight of all their supplies. They have asked you to write a JavaScript program that will take an array of integers representing the weight of each item, and return the sum of all the weights using recursion*/
function sumArray(arr) {
  let result = 0;
  if (arr.length === 0) {
    return result;
  }
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

console.log(sumArray([10, 20, 30, 40]));
