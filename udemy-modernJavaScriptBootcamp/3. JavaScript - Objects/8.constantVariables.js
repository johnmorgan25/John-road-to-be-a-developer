// different ways to define variables in Javascript

let isRaining = true;
isRaining = false;
console.log(isRaining);

const person = {
  age: 27,
};

//person {}; --> This is not valid

person.age = 28; // This is valid

console.log(person);

// var is very bad
// same variable could be recreated which make a lot of problems
// var is not block scoped variables
// long story short --> don't use var
