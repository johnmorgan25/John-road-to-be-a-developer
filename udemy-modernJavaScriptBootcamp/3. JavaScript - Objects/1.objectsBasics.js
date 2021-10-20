// An examble of an object is the user.
// We assign Name, Age, and a lot of another information about the user

// examble on objects
let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "Animal farm";

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge Area
// create an object for a human including Name, age, and address

let human = {
  name: "John",
  age: 26,
  location: "Alexandria",
};

console.log(
  `Hi my name is ${human.name}, I am ${human.age} years old, and I live in ${human.location}`
);

++human.age;

console.log(
  `Hi my name is ${human.name}, I am ${human.age} years old, and I live in ${human.location}`
);
