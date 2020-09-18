// Assignment Code
var generateBtn = document.querySelector("#generate");

//Boolean variables to ensure user choose at least one type
var IncludeLowerCase = false;
var IncludeUpperCase = false;
var IncludeNumbers = false;
var IncludeSpecialChar = false;
var IsValid = false;
var MyChosenLength = 0;
var ArrPassword = [];

// included letters, numbers and char
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

//convert to array
var arrLowerCase = Array.from(lowerCase);
var arrUpperCase = Array.from(upperCase);
var arrNumbers = Array.from(numbers);
var arrSpecialChar = Array.from(specialChar);

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.textContent = ArrPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generate password function
function generatePassword() {

    UserChoice(); //PasswordTypeCheck();
    // generate random password
    for (var i = 0; ArrPassword.length < MyChosenLength - 1; i++) {

        if (IncludeNumbers) {
            var random1 = Math.floor(Math.random() * arrNumbers.length);
            ArrPassword += arrNumbers[random1];
        }
        if (IncludeLowerCase) {
            var random2 = Math.floor(Math.random() * arrLowerCase.length);
            ArrPassword += arrLowerCase[random2];
        }
        if (IncludeUpperCase) {
            var random3 = Math.floor(Math.random() * arrUpperCase.length);
            ArrPassword += arrUpperCase[random3];
        }
        if (IncludeSpecialChar) {
            var random4 = Math.floor(Math.random() * arrSpecialChar.length);
            ArrPassword += arrSpecialChar[random4];
        }

    }
    //return ArrPassword;
} //while (IsValid) {
//}


function PasswordTypeCheck() {
    if (!IncludeUpperCase && !IncludeLowerCase && !IncludeNumbers && !IncludeSpecialChar) {
        alert("The input type should include at least one character type, please try again!");
        IsValid = false;
        UserChoice();
    } else {
        IsValid = true;
        console.log("The password type choice is valid")
    }
}

function UserChoice() {
    var lengthChoice = prompt("Please choose the length of the password: ");
    if (lengthChoice < 8 || lengthChoice > 128) {
        alert("The password must have at least 8 characters and no more than 128 characters");
        IsValid = false;
        UserChoice();
    } else {
        MyChosenLength = lengthChoice;
        IncludeNumbers = confirm("Do you want to include numbers in your password? ");
        if (IncludeNumbers) {
            //AddNumbers;
            console.log("User wants numbers");

        }

        IncludeLowerCase = confirm("Do you want to include lower cases in your password?");
        if (IncludeLowerCase) {
            //AddLowerCase();
            console.log("User wants lower case");

        }
        IncludeUpperCase = confirm("Do you want to include upper cases in your password?");
        if (IncludeUpperCase) {
            //AddUpperCase();
            console.log("User wants upper case");

        }
        IncludeSpecialChar = confirm("Do you want to include special char in your password?")
        if (IncludeSpecialChar) {
            //AddSpecialChar();
            console.log("User wants symbols");
        }
        PasswordTypeCheck(); // Check if the password fulfill the requirements

    }


}