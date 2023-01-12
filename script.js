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

// Takes all possible options from each array (lowercase, upper, numbers, symbols) and makes a new array of "possibilities" then picks X amount of characters based on user input, but need to make sure its picking the same amount from each array or no more than the input divided by however many arrays are being used, and then randomize their order

// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", ",", ".", ":", ";", "?", "[", "]", "{", "}", "~", "+", "=", "_", "-"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = securePassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", start, writePassword);

function start () {
  const lowerCaseBoolean = confirm(`Do you want to use lowercase characters?`); // true or false
  const upperCaseBoolean = confirm(`Do you want to use uppercase characters?`); // true or false
  const numberBoolean = confirm(`Do you want to use numbers?`); // true or false
  const specialCharactersBoolean = confirm(`Do you want to use special characters?`); //true or false
  const numPasswordLength = prompt(`Please pick a value between 8 and 128 characters`); // input for password length

  var passwordPossibilities = [" "];

if (lowerCaseBoolean === true && upperCaseBoolean === true && numberBoolean === true && specialCharactersBoolean === true) {
  var passwordPossibilities = lowerCase.concat(upperCase, numbers, specialCharacters);
  } else if (lowerCaseBoolean === true && upperCaseBoolean === true && numberBoolean === true) {
      var passwordPossibilities = lowerCase.concat(upperCase, numbers);
    } else if (lowerCaseBoolean === true && upperCaseBoolean === true && specialCharactersBoolean === true) {
      var passwordPossibilities = lowerCase.concat(upperCase, specialCharacters);
    } else if (specialCharactersBoolean === true && upperCaseBoolean === true && numberBoolean === true) {
      var passwordPossibilities = specialCharacters.concat(upperCase, numbers);
    } else if (lowerCaseBoolean === true && specialCharactersBoolean === true && numberBoolean === true) {
      var passwordPossibilities = lowerCase.concat(specialCharacters, numbers);
      } else if (lowerCaseBoolean === true && upperCaseBoolean === true) {
        var passwordPossibilities = lowerCase.concat(upperCase);
      } else if (lowerCaseBoolean === true && specialCharactersBoolean === true) {
          var passwordPossibilities = lowerCase.concat(specialCharacters);
      } else if (lowerCaseBoolean === true && numberBoolean === true) {
        var passwordPossibilities = lowerCase.concat(numbers);
      } else if (specialCharactersBoolean === true && upperCaseBoolean === true) {
        var passwordPossibilities = specialCharacters.concat(upperCase);
      } else if (specialCharactersBoolean === true && numberBoolean === true) {
        var passwordPossibilities = specialCharacters.concat(numbers);
      } else if (upperCaseBoolean === true && numberBoolean === true) {
        var passwordPossibilities = upperCase.concat(numbers);
      } else if (lowerCaseBoolean === true) {
        var passwordPossibilities = lowerCase.concat();
      } else if (upperCaseBoolean === true) {
        var passwordPossibilities = upperCase.concat();
      } else if (numberBoolean === true) {
        var passwordPossibilities = numbers.concat();
      } else if (specialCharactersBoolean === true) {
        var passwordPossibilities = specialCharacters.concat();
  }

  for (let index = 0; index < numPasswordLength; index++) {
    const passwordChar = passwordPossibilities[Math.floor(Math.random() * passwordPossibilities.length)];
    console.log(passwordChar);
  }
};

// figure out how to require at least one character of each condition within the password
// look into cleaning up and making it easier than all of the else, if statements above
// then figure out how to have the password input into the text box
// if characters are less than 8 or greater than 128, then need to alert user
































// if (upperCaseBoolean === true) {
//   var passwordPossibilities = upperCase.concat();
//   console.log(passwordPossibilities);
//   }

// if (numberBoolean === true) {
//   var passwordPossibilities = numbers.concat();
//   console.log(passwordPossibilities);
//   }

// if (specialCharactersBoolean === true) {
//   var passwordPossibilities = specialCharacters.concat();
//   console.log(passwordPossibilities);
//   }
// };


// if (lowerCaseBoolean === true) {
//   for (let index = 0; index < numPasswordLength; index++) {
//     const lowerCaseGen = lowerCase[Math.floor(Math.random() * lowerCase.length)];
//     console.log(lowerCaseGen);
//   }
// };

// if (upperCaseBoolean === true) {
//   for (let index = 0; index < numPasswordLength; index++) {
//     const upperCaseGen = upperCase[Math.floor(Math.random() * upperCase.length)];
//     console.log(upperCaseGen);
//   }
// };

// if (numberBoolean === true) {
//   for (let index = 0; index < numPasswordLength; index++) {
//     const numberGen = numbers[Math.floor(Math.random() * numbers.length)];
//     console.log(numberGen);
//   }
// };

// if (specialCharactersBoolean === true) {
//   for (let index = 0; index < numPasswordLength; index++) {
//     const specialCharactersGen = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
//     console.log(specialCharactersGen);
//   }
// };

// if (lowerCaseBoolean === true) {
//   const passwordPossibilities = lowerCase.concat();
//   console.log(passwordPossibilities);
// } else if (upperCaseBoolean === true) {
//   const passwordPossibilities = upperCase.concat();
//     console.log(passwordPossibilities);
//   } else if (numberBoolean === true) {
//     const passwordPossibilities = numbers.concat();
//     console.log(passwordPossibilities);
//   } else if (specialCharactersBoolean === true) {
//     const passwordPossibilities = specialCharacters.concat();
//     console.log(passwordPossibilities);