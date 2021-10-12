// each binding has a scope in which the binding is visible 
// for bindings defined outside of any function or block the scope is the whole program (global)
// Local binfings are declared inside a function and can be referred only inside the function 
// every time the local function is called, new instance of these bindings are created

let x = 10;
if (true){
    let y = 20;
    var z = 30;
    console.log(x+y+z);
}
//console.log(x+y+z); --> This will give an error
// because y is not visible here

const halve = function(n){
    return n/2
};
let n = 10;
console.log(halve(100));
//-> 50
console.log(n);
//-> 10



