let num = 5.5 + 1;
console.log(num);
// We can add(+), Subtract(-), Multibly(*), and divide(/)
// JS could be our pocket calculator
// Orders of operations takes place in JS just like pencil and paper maths
// () takes place before anything else

let age = 25;
let dogyears = age + 1 / 7;
// The problem is that (/) takes place before (+)
dogyears = (age + 1) / 7;

console.log(dogyears);

// The challenge is meant to calculate student's percentage

let studentScore = 18;
let maxScore = 20;
let percentage = (studentScore / maxScore) * 100;

console.log(percentage, "%");

//lesson learned: Always use prenthesis
