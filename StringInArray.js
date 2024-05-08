// A group of friends went on a treasure hunt in a vast desert. They had a map with the names of all the oases in the area. One of the friends, let's call him Edureka, was in charge of finding the location of the next oasis. He searched through the map and found the name "Edureka" written on it. However, he needed to find out where it was located.
// Another friend who was good at programming, let's call her AlmaBetter, suggested creating a function to find the index of the name "Edureka" in the map. She quickly wrote a program that searched through the map to find the index of "Edureka". The program returned an index of 2, which allowed Edureka to find the location of the next oasis.
// The group of friends continued their treasure hunt, and whenever they needed to find the location of an oasis, they used AlmaBetter's program to find the index of the name on the map. If the name wasn't present in the map, the program returned -1. Thanks to AlmaBetter's program, the friends could find all the oases and complete their treasure hunt successfully.Write a java program to the index of a given string by creating a function that returns the index of the given string in an array and returns -1 if the string is not present

function findIndex(arr, str) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      return i;
    }
  }
  return -1;
}
let arr = ["apple", "banana", "orange", "grape"];
let str = "orange";
let index = findIndex(arr, str);
console.log(index);
