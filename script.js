// Assignment Code


let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  userInput()
  var password = userInput();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password options
let capitalLetters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
let lowerCaseLetters = ("abcdefghijklmnopqrstuvwxyz");
let specialCharacters = ("!@#$%^&*()_-=+[{}];'./")
let numericCharacters = ("1,2,3,4,5,6,7,8,9")
// Password Array
let passwordArray = []
let passwordCharacters = []
//User Input Choices
let userChoiceLength = 0;
let userChoiceCaps = false;
let userChoiceLower = false;
let userChoiceNumeric = false;
let userChoiceSpecial = false;


function userInput() {
  //ask for length of password
  passwordCharacters = []
  userChoiceLength = prompt("How many characters (min-8 max-128)?")
  if (isNaN(userChoiceLength)) {
    alert("Invalid Choice");
    return userInput();
  }
  else if (userChoiceLength < 8 || userChoiceLength > 128) {
    alert("Invalid Choice");
    return userInput();
  }
  //else if (userChoiceLength == false){
  //  return;


  //ask if the user wants capital letters  
  userChoiceCaps = confirm("Want Capital Letters?")
  if (userChoiceCaps == true) {
    (passwordArray = capitalLetters.concat(passwordCharacters));
  }
  else if (userChoiceCaps == false);


  //ask user if they want lower case letters
  userChoiceLower = confirm("Want Lower Case Letters?")
  if (userChoiceLower == true) {
    (passwordArray = lowerCaseLetters.concat(passwordCharacters));
  }
  else if (userChoiceLower == false);


  //ask if user wants numeric characters
  userChoiceNumeric = confirm("Want Numeric Characters?")
  if (userChoiceNumeric == true) {
    (passwordArray = numericCharacters.concat(passwordCharacters));
  }
  else if (userChoiceNumeric == false);




  //ask if user wants special characters
  userChoiceSpecial = confirm("Want Special Characters?")
  if (userChoiceSpecial == true) {
    (passwordArray = specialCharacters.concat(passwordCharacters));
  }
  else if (userChoiceSpecial == false);

  //If nothing has been selected for criteria
  if (userChoiceCaps == false && userChoiceLower == false && userChoiceNumeric == false && userChoiceSpecial == false) {
    alert("Invalid password, no criteria selected.");
    return userInput();

  }
}

