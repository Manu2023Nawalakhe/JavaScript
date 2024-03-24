/*Once upon a time, there was a young programmer named Jack. Jack had a passion for coding and always looked for new challenges. One day, his teacher gave him the assignment to write a JavaScript program to find out whether a given number was a prime number or not. Jack knew that a prime number is a number that is divisible only by one and itself.

He started by creating an empty JavaScript function and then wrote a program that would check if the given number is divisible by any other number except one and itself.

Help Jack complete this work given by his teacher.*/

function primeNumber(n) {
  if (n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeNumber(9));
