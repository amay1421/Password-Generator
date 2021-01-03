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

  var lowerCaseSet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
  't','u','v','w','x','y','z',];

  var upperCaseSet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S',
  'T','U','V','W','X','Y','Z',];

  var numberSet = ['1','2','3','4','5','6','7','8','9'];

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
