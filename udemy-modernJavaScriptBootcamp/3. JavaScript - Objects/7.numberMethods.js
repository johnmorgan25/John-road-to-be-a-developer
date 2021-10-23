let num = 103.941;

//toFixed method
console.log(num.toFixed(1));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

// random methods
console.log(Math.random());

//Challenge
// Creatge a function input is guess

let makeGuess = function (guess) {
  let min = 0;
  let max = 1;
  let randomNum = Math.round(min + Math.random() * (max - min));
  return guess == randomNum;
};

console.log(makeGuess(0));
