//(F->C)

let celsius = 25;

console.log(celsiusToFahrenheit(celsius));

function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

// (C->F)
var a = 77; // Assuming 77 degrees Fahrenheit
console.log(fahrenheitToCelsius(a));

function fahrenheitToCelsius(fahrenheit) {
  // Convert Fahrenheit to Celsius
  var celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}
