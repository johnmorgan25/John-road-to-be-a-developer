

// const removeString = function(tArray){
//     let newArray = tArray.filter(item => typeof item === 'number');
//     return (newArray);
// }

// let testArray = [1,2,'a','b'];
// console.log(removeString(testArray));


//     let sum = 0;
//     for (let ii = 0; ii<10; ii++){

//        // console.log(ii);
//       if (ii % 3 == 0 || ii % 5 == 0){
//         sum += ii;
//        // console.log(sum);
//       }else{
//           sum +=0;
//          // console.log(sum);
//       }
//     }
// console.log(sum);

// let num = 123;                          // {123}
// let n  = num.toString();                // converts number into a string for further processing {'123'}
// let testArray = Array.from(n);          // converts the string into an array {['1','2','3']}
// testArray = testArray.map(item => Number(item));    // converts each string item into a number again {[1,2,3]}
// testArray = testArray.map(x => x*x );   // converts each number to the square of it {[1,4,9]}
// testArray = testArray.join('');         // Concatinate the squared numbers  {'149'}

// console.log(testArray);

// function squareDigits(num){
//     let testArray = Array.from(num.toString());
//     testArray = testArray.map(x => x*x);
//     let newArray = testArray.join('');
//     return newArray;
//   }

// console.log(squareDigits(3212));
// console.log(squareDigits(2112));
// console.log(squareDigits(0));

// const phoneNumber = function (n){
//  // let m = Array.from(n.toString())
//   return n.toString();
// }
// console.log(phoneNumber(01234));

let n = 0123456;
console.log(n.toString());

