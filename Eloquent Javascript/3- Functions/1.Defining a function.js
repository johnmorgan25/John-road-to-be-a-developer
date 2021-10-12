// function definition 

const square = function(x){
    return x*x;
};

console.log(12);
console.log(square(12));

// functions are defined by the keyword function
// functions include parameters --> ( , )
// functions include Body --> { some logic code }
// functions don't require parameters or producing a value 

const makeNoise = function() {
    console.log("Pling!");
}

makeNoise();

const power = function (base, exponent){
    let result = 1;
    for (let count = 0; count<exponent; count++){
        result *= base;
    }
    return result;
};

console.log(power(2,10));
