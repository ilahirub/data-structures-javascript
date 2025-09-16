//! ForEach() - method on arrays

let numbers = [1, 2, 3];

numbers.forEach(function (num) {
  const doubled = num * 2;
  console.log(doubled);
});

//Arrays of objects
const products = [
  { name: "laptop", stock: 5 },
  { name: "phone", stock: 10 },
  { name: "tablet", stock: 15 },
];

// console.log(products);

products.forEach((individualProduct) => {
  console.log(
    `product: ${individualProduct.name},stock:${individualProduct.stock}`
  );
});

//! map() transform data
//creates new array
//transform the elements

let number = [1, 2, 3, 4];

const doubledArray = number.map(function (num) {
  return num * 2;
});

console.log("doubled", doubledArray);
console.log("original array", number);

const product = [
  { name: "laptop", stock: 5, price: 1000 },
  { name: "phone", stock: 10, price: 500 },
  { name: "tablet", stock: 15, price: 300 },
];

//apply 10% discounts on the price
const discountedPrices = product.map((product) => {
  return {
    name: product.name,
    stock: product.stock,
    price: product.price * 0.9,
  };
});

console.log(discountedPrices);

//!===reduce()===

const numbers1 = [1, 2, 3, 4, 5, 6];

const totalSum = numbers1.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 10);
console.log(totalSum);

//calculate total inventory value

const product1 = [
  { name: "laptop", stock: 5, price: 1000, isOutOfStock: false },
  { name: "phone", stock: 10, price: 500, isOutOfStock: true },
  { name: "tablet", stock: 15, price: 300, isOutOfStock: true },
];

const totalValue = product1.reduce(function (acc, curr) {
  return acc + curr.stock * curr.price;
}, 0);

console.log(totalValue);

//!====find()=====
const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const foundNum = num1.find(function (num) {
  return num > 3;
});

console.log(foundNum);

//?filter method
const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const foundNum1 = num1.filter(function (num) {
  return num > 3;
});

console.log(foundNum1);
