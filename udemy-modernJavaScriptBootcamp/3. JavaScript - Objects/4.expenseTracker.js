///CHALLENGE///
"use strict";

let myAccount = {
     name: "John",
     income: 0,
     expense: 0
}

/* Functions
 1. Add expense
 2. Add income 
 3. Reset Account 
 4. Get account summary 
*/

//Add expense function
let addExpense = function (account, expense) {
    account.expense += expense;
} 

//Add income function
let addIncome = function (account, income) {
    account.income += income;
}

//Reset account function
let resetAccount = function (account){
    account.income = 0;
    account.expense = 0;
}

//Get account summary function 
let getAccountSummary = function (account){
    let balance = account.income - account.expense;
    console.log(`Account for ${account.name} has ${balance}. ${account.income} in income. and ${account.expense} in expense `)
}


//add income 
addIncome(myAccount, 2000);
//add expense 
addExpense(myAccount, 2.5);
//add expense
addExpense(myAccount, 160);
//account summary 
getAccountSummary(myAccount);
//reset account 
resetAccount(myAccount);
//account summary
getAccountSummary(myAccount);

