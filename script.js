// Assignment Code
var generateBtn = document.querySelector("#generate");

console.log(generateBtn)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var myPassword = '';

  // ask the user how many characters
  var characterLength = prompt("How many characters?");

  while(characterLength < 8 || characterLength > 128 ) {
    characterLength = prompt("Must be atleast 8, and not over 128. Please enter a valid value:");
  }

  // ask which to include

  var includeLowercase = confirm("Do you want lowercase?");
  var includeUppercase = confirm("Do you want uppercase?");
  //var includeNumber= confirm("Do you want number?");
  //var includeSpecial = confirm("Do you want special?");

  // create character pool/sets

  var lowerCaseSet = ['a','e', 'i', 'o', 'u'];

  var upperCaseSet = ['A', 'E', 'I', 'O', 'U'];

  var finalSet = [];

  // build the finalSet based on user input

  if(includeLowercase) {
    // include lowercase!
    finalSet = finalSet.concat(lowerCaseSet);
  }

  if(includeUppercase) {
    // include lowercase!
    finalSet = finalSet.concat(upperCaseSet);
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
