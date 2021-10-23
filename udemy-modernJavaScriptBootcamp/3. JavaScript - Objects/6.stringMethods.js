let myName = "  John Morgan  ";
let otherName = "Andrew Mead";

// In this chapter we will use methods that are already configured in javascript
// We will not write those methods

// length
console.log(myName.length);

// Character access
console.log(myName[3]);
console.log(myName.charAt(1));

//convert to upper case
//myName.toUpperCase();
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

// includes Method
let password = "abc123password098";
console.log(password.includes("kk"));

// Trim Methods
// It remove white space
console.log(myName.trim());

// function is valid password
// True if  1. length is more than 8  2. Doesn't include the word "Password"
let isValidFunction = function (password) {
  if (password.length >= 8 && !password.includes("password")) {
    return "valid password";
  } else {
    return "invalid password";
  }
};

console.log(isValidFunction("abc1230x"));
console.log(isValidFunction("password123x"));
