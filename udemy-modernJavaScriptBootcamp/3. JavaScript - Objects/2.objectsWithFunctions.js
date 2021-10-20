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

//getSummary(myBook);
//getSummary(otherBook);

// returning an  object from a function

let getSummary2 = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} page long`,
  };
};

let bookSummary = getSummary2(myBook);
let pageSummary = getSummary2(otherBook);

console.log(bookSummary);
console.log(pageSummary);

//Challenge Area
let fahrenheitToOther =  function (fahrenheit){
  let celsius = (fahrenheit-32)*(5/9);
  let kelvin = celsius + 273;
  return {
    tempCelsius : `Temprature in celsius is ${celsius}`
    tempKelvin  : 
  };
}