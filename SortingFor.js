/*Once upon a time, there was a kingdom that celebrated a grand festival every year. During the festival, people used to bring different kinds of fruits and present them to the king.

To organize these fruits, a local merchant came up with an idea to create an array and store the fruits in it. Each element of the array would represent a fruit, and its value would be the number of times that fruit had been brought to the festival.

As the festival came to an end, the king ordered his royal chef to prepare a grand feast for the kingdom, using the fruits in the array. However, the chef had a unique requirement. He wanted to use the fruits in decreasing order of their frequency, and in case two or more fruits had the same frequency, he wanted to use the one that appeared first in the array.*/

function printFruitsByFrequency(fruits) {
  const frequency = {};
  for (let i = 0; i < fruits.length; i++) {
    frequency[fruits[i]] = (frequency[fruits[i]] || 0) + 1;
  }
  const sortedFruits = Object.keys(frequency).sort((a, b) => {
    if (frequency[a] === frequency[b]) {
      return fruits.indexOf(a) - fruits.indexOf(b);
    }
  });
  return sortedFruits;
}
const fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
  "orange",
];
console.log(printFruitsByFrequency(fruits));
