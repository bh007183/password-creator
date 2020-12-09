
//Main function
function generatePassword() {
  return "password"
}

  // How long should password be?
  


   

//TODO: When button clicked, series of promps.
//TODO: Select which criteria to include in the password when prompted.
//TODO: 1st criteria prompt will be how long should the password be. must be between 8 and 128 characters. 
//TODO: If fails, alert message.
//TODO: Ask if user wants lowercase.
//TODO: Ask if user wants uppercase.
//TODO: Ask if user wants numeric.
//TODO: And/or ask if user wants special characters.
// at least one charector that user selects from each catigory must be used.
//TODO:generat password matching above specifications.

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
