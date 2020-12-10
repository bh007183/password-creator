
//   Main function
function generatePassword(){
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numeric = ["0","1","2","3","4","5","6","7","8","9"];
  var specialChar = ["!","@","#","$","%","^","&","*","+","="];
  var compile = [];
  
  // User interface variables w/ "if" statement checking for validity of inpute.
  
  var numberGiven = prompt("How long would you like the password? It must be between 8 and 128 (inclusive).");
  
  if (numberGiven >= 8 && numberGiven <= 128){
    
  var questionLower = confirm("Would you like lower case letters in your password? If YES, click OK, if NO, click cancel");
  var questionSpecial = confirm("Would you like special charectors in your password? If YES, click OK, if NO, click cancel");
  var questionUpper = confirm("Would you like upper case letters in your password? If YES, click OK, if NO, click cancel");
  var questionNumeric = confirm("Would you like numbers in your password? If YES, click OK, if NO, click cancel");
  
  //Loop for checking criteria requested by user and adding those characters requested to empty array titled "compile".
  
  while(compile.length < numberGiven){

    if (questionLower === true){
        var lower = Math.floor(Math.random() * lowerCase.length);
        var lowerPass = lowerCase[lower]
        if (compile.length < numberGiven){         
            compile.push(lowerPass);
        }
      }
            
        
    if (questionUpper === true){
        var upper = Math.floor(Math.random() * upperCase.length);
        var upperPass = upperCase[upper];
        if (compile.length < numberGiven){         
            compile.push(upperPass);
        }
      }
        
      
    if (questionNumeric === true){
        var number = Math.floor(Math.random() * numeric.length);
        var numberPass = numeric[number];
        if (compile.length < numberGiven){         
            compile.push(numberPass);
        }
      }   
    
    if (questionSpecial === true){
        var special = Math.floor(Math.random() * specialChar.length);
        var specialPass = specialChar[special];
        if (compile.length < numberGiven){         
            compile.push(specialPass);
        }
      }
    }
  
    // New variable with combined "compile" array.
     
     var password = compile.join("");  
    //password returned to screen.
   
     return password
   
    // Invalid Entry message to screen.
  } else {return "Invalid Entry. Try Again."}
}
        


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
