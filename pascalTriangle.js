/*Imagine you are designing a new video game where players have to navigate through a maze of obstacles. To generate the maze, you decide to use Pascal's Triangle. You want to create a function that takes an integer n as input and returns the first n rows of Pascal's Triangle. Each row should be represented as an array of integers.

To get started, think about how Pascal's Triangle works. Each row is created by adding the two numbers directly above it in the previous row. The first and last numbers of each row are always 1. Your function should iterate through each row, calculate the values, and store them in a two-dimensional array.

Once you have generated the triangle, you can use it to create the maze. Each number in the triangle represents a different type of obstacle in the maze. For example, you could use the number 0 to represent a clear path, 1 to represent a wall, and 2 to represent a locked door that requires a key to open.

So, your task is to write a JavaScript function that generates the first n rows of Pascal's Triangle. Good luck!*/

function pascalTriangle(n) {
  const triangle = [];
  for (let i = 0; i < n; i++) {
    triangle[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        triangle[i][j] = 1;
      } else {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
    }
  }
  return triangle;
}
console.log(pascalTriangle(5));
