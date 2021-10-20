let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 320,
};

let otherBook = {
  title: "A perople History",
  author: "Howard Zinn",
  paperCount: 723,
};

let getSummary = function (Book) {
  console.log(`${Book.title} by ${Book.author}`);
};

getSummary(myBook);
getSummary(otherBook);

// returning a value from a function
