// Assignment Code

let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = userInput();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password options
let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
let specialCharacters = "!@#$%^&*()_-=+[{}];'./";
let numericCharacters = "1,2,3,4,5,6,7,8,9";

//User Input Choices
let userChoiceLength = 0;
let userChoiceCaps = false;
let userChoiceLower = false;
let userChoiceNumeric = false;
let userChoiceSpecial = false;

// Function that gathers user data
function userInput() {
  //ask for length of password
  let passwordCharacters = [];
  userChoiceLength = prompt("How many characters (min-8 max-10000)?");
  if (isNaN(userChoiceLength)) {
    alert("Invalid Choice");
    return userInput();
  } else if (userChoiceLength < 8 || userChoiceLength > 140) {
    alert("Invalid Choice");
    return userInput();
  }

  //ask if the user wants capital letters
  userChoiceCaps = confirm("Want Capital Letters?");
  if (userChoiceCaps == true) {
    passwordCharacters = passwordCharacters.concat(capitalLetters);
  }

  //ask user if they want lower case letters
  userChoiceLower = confirm("Want Lower Case Letters?");
  if (userChoiceLower == true) {
    passwordCharacters = passwordCharacters.concat(lowerCaseLetters);
  }

  //ask if user wants numeric characters
  userChoiceNumeric = confirm("Want Numeric Characters?");
  if (userChoiceNumeric == true) {
    passwordCharacters = passwordCharacters.concat(numericCharacters);
  }

  //ask if user wants special characters
  userChoiceSpecial = confirm("Want Special Characters?");
  if (userChoiceSpecial == true) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  }

  //If nothing has been selected for criteria
  if (
    userChoiceCaps == false &&
    userChoiceLower == false &&
    userChoiceNumeric == false &&
    userChoiceSpecial == false
  ) {
    alert("Invalid password, no criteria selected.");
    return userInput();
  }
  //Changes the array to a string
  passwordCharacters = passwordCharacters.join("");
  console.log(passwordCharacters);

  //Creates the random password
  let result = "";
  for (i = 0; i < userChoiceLength; i++) {
    result += passwordCharacters.charAt(
      Math.floor(Math.random() * passwordCharacters.length)
    );
  }
  //Returns resulting password to the webpage
  return result;
}
