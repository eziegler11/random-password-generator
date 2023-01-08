// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", ",", ".", ":", ";", "?", "[", "]", "{", "}", "~", "+", "=", "_", "-"];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var passwordGen = [];

const lowerCaseBoolean = confirm(`Do you want to use lowercase characters?`); // true or false
const upperCaseBoolean = confirm(`Do you want to use uppercase characters?`) // true or false
const specialCharactersBoolean = confirm(`Do you want to use special characters?`) //true or false
const numPasswordLength = prompt(`Please pick a value between 8 and 128 characters`); // input for password length


if (lowerCase) {
  for (let index = 0; index < numPasswordLength; index++) {
    const lowerCaseGen = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    console.log(lowerCaseGen);
  }
};

if (upperCase) {
  for (let index = 0; index < numPasswordLength; index++) {
    const upperCaseGen = upperCase[Math.floor(Math.random() * upperCase.length)];
    console.log(upperCaseGen);
  }
};

if (numbers) {
  for (let index = 0; index < numPasswordLength; index++) {
    const numberGen = numbers[Math.floor(Math.random() * numbers.length)];
    console.log(numberGen);
  }
};

if (specialCharacters) {
  for (let index = 0; index < numPasswordLength; index++) {
    const specialCharactersGen = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    console.log(specialCharactersGen);
  }
};



// document.getElementById("#generate").addEventListener("click", () => {

// });