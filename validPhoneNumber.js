// Write a function to check if a given string contains a valid phone number or not using Regular Expression in JavaScript. A valid phone number should have 10 digits and should start with either 7, 8 or 9.
function isValidPhoneNumber(phoneNumber) {
  const regex = /^[7-9]\d{9}$/;
  return regex.test(phoneNumber);
}

console.log(isValidPhoneNumber(9876790981));
