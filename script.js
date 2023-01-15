// Acceptance Criteria

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Notes / Thoughts on Process & Function
// 1. EventLister on button click to generate the prompts/function
// 2. Confirm user, true/false for lowercase letters
//   - if statement, user wants lowercase
//  - then function to run through the lowercase array and generate X amount of characters, based on character input
//  - user doesn't want lowercase letters, so do nothing and move onto next function
// 3. Confirm user, true/false for uppercase letters
//  - if statement, user wants uppercase
//  - then function to run through the uppercase array and generate X amount of characters, based on character input
//  - user doesn't want uppercase letters, so do nothing and move onto next function
// 4. Confirm user, true/false for numeric characters
//  - if statement, user wants numeric
//  - then function to run through the numeric array and generate X amount of characters, based on character input
//  - user doesn't want numeric characters, so do nothing and move onto next function
// 5. Confirm user, true/false for symbols 
//  - if statement, user wants symbols
//  - then function to run through the symbols array and generate X amount of characters, based on character input
//  - user doesn't want symbols, so do nothing and move onto next function
// 6. Prompts user to select between 8-128 characters
//  - if user selects between 8-128 characters
//  - then proceed with function and input password into the text box
//  - need variable for required characters and then for the function to pull X characters from each Confirm/Condition above
//  - Conditionals for less than 8 characters, returns, "Please select between 8-128 characters."
//  - Conditional for greater than 128 characters, returns, "Please select between 8-128 characters."


// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", ",", ".", ":", ";", "?", "[", "]", "{", "}", "~", "+", "=", "_", "-"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", start);

function start () {
  let numPasswordLength = prompt(`Please pick a value between 8 and 128 characters`); // input for password length

  // if user presses cancel, it will exit the function
  if (!numPasswordLength) {
    return;
  }

  // alert if password is too short or too long
  if (numPasswordLength < 8 || numPasswordLength > 128) {
    window.alert(`Please choose a length of at least 8 characters and no more than 128 characters.`);
    return;
  }

  let lowerCaseBoolean = confirm(`Do you want to use lowercase characters?`); // true or false
  let upperCaseBoolean = confirm(`Do you want to use uppercase characters?`); // true or false
  let numberBoolean = confirm(`Do you want to use numbers?`); // true or false
  let specialCharactersBoolean = confirm(`Do you want to use special characters?`); //true or false

  // Alert if no input types selected

  if (lowerCaseBoolean === false && upperCaseBoolean === false && numberBoolean === false && specialCharactersBoolean === false) {
    window.alert(`You must choose at least one input to proceed.`);
    return;
  }

  // Empty array to store password possibilities based on conditions
  var passwordPossibilities = [];

  // Joining user inputs into one, new array
  if (lowerCaseBoolean) {
  passwordPossibilities = lowerCase.concat(passwordPossibilities);
  } if (upperCaseBoolean) {
  passwordPossibilities = upperCase.concat(passwordPossibilities);
  } if (numberBoolean) {
  passwordPossibilities = numbers.concat(passwordPossibilities);
  } if (specialCharactersBoolean) {
  passwordPossibilities = specialCharacters.concat(passwordPossibilities);
  }

  // New variable for password to become
  let newPassword = "";
  // Using count variable in the conditionals below and the for loop, to ensure that at least 1 character of each input will be included in password if selected
  let count = 0;

  // randomizing each user input array/conditional and producing a newPassword variable and increasing count if user selects input 
  if (lowerCaseBoolean) {
    const passwordChar = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    newPassword = newPassword.concat(passwordChar);
    count++;
  }
  if (upperCaseBoolean) {
    const passwordChar = upperCase[Math.floor(Math.random() * upperCase.length)];
    newPassword = newPassword.concat(passwordChar);
    count++;
  }
  if (specialCharactersBoolean) {
    const passwordChar = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    newPassword = newPassword.concat(passwordChar);
    count++;
  }
  if (numberBoolean) {
    const passwordChar = numbers[Math.floor(Math.random() * numbers.length)];
    newPassword = newPassword.concat(passwordChar);
    count++;
  }

  // Looping through the password possibilities based on the password length that the user selects, then defining the password variable
  for (let index = count; index < numPasswordLength; index++) {
    const passwordChar = passwordPossibilities[Math.floor(Math.random() * passwordPossibilities.length)];
    newPassword = newPassword.concat(passwordChar);
  }

  // Shuffles through the password variable to ensure string is randomized and varied 
  newPassword = newPassword.split('').sort(function(){return 0.5-Math.random()}).join('');

  // logs in console and writes the generated password onto the page
  console.log(newPassword);
  writePassword(newPassword);
};