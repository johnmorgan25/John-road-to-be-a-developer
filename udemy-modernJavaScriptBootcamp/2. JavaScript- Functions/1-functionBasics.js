let greetUser = function () {
    console.log('Welcome');
}

// Good news -> We can repeat the function many times

greetUser();
greetUser();
greetUser();

let square = function (num){
    let result = num * num;
    return result;
}

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

//Challenge Area

//convertFahrenheitToCelsius
let fahrenheitToCelsius =  function (fahrenheit){
    let celsius = (fahrenheit-32)*(5/9);
    return celsius;
}

//call it a couple of times (32->0) (68->20)
valueOne = fahrenheitToCelsius(32);
valueTwo = fahrenheitToCelsius(68);
valueThree = fahrenheitToCelsius(47);

//print the converted values
console.log(valueOne);
console.log(valueTwo);
console.log(valueThree);

