// Assignment Code
var generateBtn = document.querySelector("#generate");

var IncludeLowerCase = false;
var IncludeUpperCase = false;
var IncludeNumbers = false;
var IncludeSpecialChar = false;
var IsValid = false;
var PasswordList = "";

// Object of all random functions used to create random password
/*var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};*/
// Random generators


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generate password function
function generatePassword() {
    UserChoice();
    //PasswordTypeCheck();
    //while (IsValid) {

    //}

}

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

        IncludeNumbers = confirm("Do you want to include numbers in your password? ");
        if (IncludeNumbers) {
            //AddNumbers();
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

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26));
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26));
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1) * 10));
}

function getRandomSymbol() {
    const symbols = '~!@#$%^&*()_+{}":?><;.,=-[]';
    return symbols[Math.floor(Math.random() * symbols.length)];
}