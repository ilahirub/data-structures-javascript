//how to create an array

let fruits = ["apple", "mango", "banana", "kiwi"]; //arrays
console.log(fruits);

//push
fruits.push("pineapple");

//how to access array data
let accessApple = fruits[0];
let accessMango = fruits[1];
let accessBanana = fruits[2];
console.log(accessApple);
console.log(accessMango);
console.log(accessBanana);

//pop
let books = ["hobbit", "nodejs", "html", "css"];
books.pop();
console.log(books);

//shift
books.shift();
console.log(books);

//unshift
books.unshift("mern stack");
console.log(books);

//concatenation
const color1 = ["red", "green"];
const color2 = ["yellow", "black", "orange"];
const allColor = color1.concat(color2);
console.log(allColor);

//slicings
const techCompany = [
  "google",
  "apple",
  "facebook",
  "netflix",
  "amazon",
  "flipcart",
  "aramco",
];
const selectedCompany = techCompany.slice(1, 4);
console.log(selectedCompany);
//console.log(techCompany);

//.length
const totalCompany = techCompany.length;
console.log(totalCompany);
