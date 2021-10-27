// This is a playground for javascript arrays 




//join
let testArray = ['a','b','c',4,5,6];
testArray = testArray.join('-');
console.log(testArray);
// Output:
// a-b-c-4-5-6


//concat 
testArray = ['a','b','c',4,5,6];
testArray = testArray.concat(['x']);
console.log(testArray);
// Output:
// ['a','b','c',4,5,6,'x']


//push --> adds an item to the end of the array 
testArray=['a','b','c',4,5,6];
testArray.push('first item');
console.log(testArray);
// Output:
// [ 'a', 'b', 'c', 4, 5, 6, 'first item' ]

// Note: 
// concat creates a new array with the added item while push adds an item to the current array


//pop --> removes the last item in the array
testArray=['a','b','c',4,5,6];
testArray.pop();
console.log(testArray);
// Output:
// [ 'a', 'b', 'c', 4, 5 ]


//unshift --> adds an item to the beginning of an array 
testArray=['a','b','c',4,5,6];
testArray.unshift('unshift1','unshift2');
console.log(testArray);
// Output:
//[ 'unshift1', 'unshift2', 'a', 'b', 'c', 4, 5, 6 ]


//shift --> removes the first item from the array
testArray=['a','b','c',4,5,6];
testArray.shift();
console.log(testArray);
// Output:
// [ 'b', 'c', 4, 5, 6 ]


//for each  -- applies any sort of processing for each element of an array 
testArray=['a','b','c',4,5,6];
testArray.forEach(item => console.log(item))
// output:
// a
// b
// c
// 4
// 5
// 6


//splice --> adds or remove elements from any position 
testArray = ['a','b','c',4,5,6];
testArray.splice(1,2);      // starting from one delete two items
console.log(testArray);
// Output:
// [ 'a', 4, 5, 6 ]

testArray = ['a','b','c',4,5,6];
testArray.splice(1,0,'added item');     //starting from one add 'added item'
console.log(testArray);       
// Output:
// [ 'a', 'added item', 'b', 'c', 4, 5, 6 ]

testArray = ['a','b','c',4,5,6];
testArray.splice(1,1,'added item');     //starting from one remove one item and add 'added item'
console.log(testArray);
// Output:
// [ 'a', 'added item', 'c', 4, 5, 6 ]



//Map --> Do mapping ina new array 
testArray = [1,2,3,4,5,6];
newArray = testArray.map(item => item*item);
console.log(newArray);
// Output:
// [ 1, 4, 9, 16, 25, 36 ]


//filter --> Keeps items in the array with certain conditions
//in this example we will filter strings (Keep numbers)
testArray = ['a','b','c',4,5,6];
testArray.filter(item => typeof(item) === 'number');
console.log(testArray);
// Output : 
// [ 1, 2 ]
