// Write a function to count the number of vowels in a given string using Regular Expression in JavaScript.

function countVowels(str) {
  const regex = /[aeiou]/gi;
  return (str.match(regex) || []).length;
}
console.log(countVowels("Hello World!"));
