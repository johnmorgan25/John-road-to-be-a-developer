let namee;
//console.log(namee); //this will result an undefined data type

function square(num) {
  resulte = num * num;
  return resulte;
}

square(); //this doesn't make any sense
let result = square();
console.log(result); //this also will result an NaN value

function square2(num) {
  console.log(num);
}

square2(); //this ill result undefined value
let result2 = square2();
console.log(result2); //this will result undefined value

function welcome() {
  console.log("welcome!");
}

welcome();
//this will print welcome because the function itself doesn't require
//null is an assigned value

let age = 27;
age = null; // To force assign null value
console.log(age);
