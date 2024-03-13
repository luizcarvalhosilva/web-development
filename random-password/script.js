function passwordGenerator() {
    const passwordLength = document.getElementById("length").value;
    const includeLowercase = document.getElementById("lowerCase").checked ? true:false;
    const includeUppercase = document.getElementById("upperCase").checked ? true:false;
    const includeNumbers = document.getElementById("numbers").checked ? true:false;
    const includeSymbols = document.getElementById("symbols").checked ? true:false;   
    const showPassword = document.getElementById("genPassword");

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowerCaseChars : "";
    allowedChars += includeUppercase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    for (let i=0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomIndex];
    }

    showPassword.innerHTML = password;
}


const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = lowerCaseChars.toUpperCase();
const numberChars = "0123456789";
const symbolChars = "!@#$£%¢¨¬&*()_-+=§[]{}~^.,;ª><?°/|'`´";














/*var x = document.getElementById("testing");
x.innerHTML += includeLowercase;
x.innerHTML += includeUppercase;
x.innerHTML += includeNumbers;
x.innerHTML += includeSymbols;
x.innerHTML += passwordLength;
*/