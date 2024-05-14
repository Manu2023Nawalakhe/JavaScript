// Sarah is a content writer who writes blogs on various topics. She has recently started writing blogs on JavaScript and wants to improve the readability of her blogs. She knows that capitalizing each word's first letter can greatly improve her content's readability. However, manually doing this for every article she writes can be time-consuming and monotonous. So, she decided to write a JavaScript function that could automatically capitalize the first letter of each word in a given string.

// Help Sarah by writing a JavaScript function named capitalizeWords that takes a string as input and returns a new string with the first letter of each word capitalized. The function should use the split method to split the string into an array of words and then capitalize the first letter of each word using the toUpperCase method. Finally, the capitalized words should be joined back together into a single string using the join method.

let str = "hello world";

console.log(capitalizeWords(str));

function capitalizeWords(str) {
  const words = str.split(" ");

  const capitalizeWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizeWords.join(" ");
}
