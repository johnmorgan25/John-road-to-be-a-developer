let myAccount = {
  name: "John",
  expenses: 0,
  account: 0,
};

let addExpense = function (account, amount) {
  account.expenses += amount;
  console.log(account);
};

addExpense(myAccount, 2.5);

console.log(myAccount);

/// It is not a clone it is a refrence
