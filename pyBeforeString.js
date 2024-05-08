let str = "thon";
console.log(addPy(str));

function addPy(str) {
  if (str.substring(0, 2) === "Py") {
    return str;
  } else {
    return "Py" + str;
  }
}
