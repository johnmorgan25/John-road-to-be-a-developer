// in JS blocks and functions can be created inside blocks and functions 
// this produces multible degrees of locality 

const hummus = function(factor){
    const ingredient = function(amount, unit, namee){
        let ingredientAmount = amount*factor;
        if (ingredientAmount > 1){
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit}`,${namee})
    }
}


// Lexical scoping --> an approach of binding
