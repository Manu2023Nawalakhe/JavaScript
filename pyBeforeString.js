// Jack was learning JavaScript programming and his teacher gave him a task. He was supposed to create a program that modifies a given string. Jack needed to add the characters "Py" in front of the string. But, if the original string already starts with "Py", he should return the original string without any modification.

// How can you create a JavaScript program to modify a given string by adding "Py" in front of it, while returning the original string without modification if it already starts with "Py"?

let str = "thon";
console.log(addPy(str));

function addPy(str) {
  if (str.substring(0, 2) === "Py") {
    return str;
  } else {
    return "Py" + str;
  }
}
