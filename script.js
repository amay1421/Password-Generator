// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var myPassword = '';

  // ask the user how many characters
  var characterLength = prompt("How many characters would you like your password to be?");

  while(characterLength < 8 || characterLength > 128 || (isNaN(+characterLength))) {
    characterLength = prompt("Your password must be at least 8 characters, and not over 128 characters. Please enter a valid numerical value:");
  }

  // ask which to include

  var includeLowercase = confirm("Do you want lowercase characters?");
  var includeUppercase = confirm("Do you want uppercase characters?");
  var includeNumber= confirm("Do you want your password to include numbers?");
  var includeSpecial = confirm("Do you want special characters?");

  // create character pool/sets

  var lowerCaseSet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
  't','u','v','w','x','y','z',];

  var upperCaseSet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S',
  'T','U','V','W','X','Y','Z',];

  var numberSet = ['1','2','3','4','5','6','7','8','9'];

  var specialSet = ['!','"','#','$','%','&','(',')','*','+','-','.','/',':','<','=','>',
'?','@','[',']','^','_','{','|','}','`','~',];

  var finalSet = [];

  // build the finalSet based on user input

  if(includeLowercase) {
    // include lowercase!
    finalSet = finalSet.concat(lowerCaseSet);
  }

  if(includeUppercase) {
    // include uppercase!
    finalSet = finalSet.concat(upperCaseSet);
  }
  if(includeNumber) {
    // include numbers!
    finalSet = finalSet.concat(numberSet);
  }
  if(includeSpecial) {
    // include special characters!
    finalSet = finalSet.concat(specialSet);
  }

  if(finalSet.length == 0) {
    return "No character set was defined."
  } else {
     // generate password
    for (var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random()*finalSet.length);

      myPassword = myPassword + finalSet[randomIndex];
    }

    return myPassword;
  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
