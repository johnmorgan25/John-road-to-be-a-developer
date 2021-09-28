//multible arguments
let add = function (a, b, c = 0) {
  return a + b + c;
};
let result = add(10, 1, 5);
console.log(result);

//default arguments
let getScoreText = function (name = "Anonymous", score = 0) {
  return "Name:" + name + ", score:" + score;
};

//getScoreTest("Andrew", 100);

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

//Challenge Area
function getTip(bill = 100, tipPercent = 10) {
  let tip = (bill * tipPercent) / 100;
  return "you should tip: " + tip + " dollars";
}

let tipAtResturant = getTip(200, 5);
console.log(tipAtResturant);
