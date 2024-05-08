let str = "hello world";

console.log(capitalizeWords(str));

function capitalizeWords(str) {

  const words = str.split(" ");
  
  const capitalizeWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizeWords.join(" ");
}
