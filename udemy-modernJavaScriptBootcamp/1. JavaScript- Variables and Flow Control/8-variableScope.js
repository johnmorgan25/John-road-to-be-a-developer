// JS uses lexical scope --> static scope
// Global scope --> Anything outside code blocks
// Local scope --> Anything inside a code block

let varOne = "varOne";

if (true) {
  console.log(varOne);
  let varTwo = "varTwo";
  console.log(varOne);
  console.log(varTwo);
}

//console.log(varTwo); // results an error
