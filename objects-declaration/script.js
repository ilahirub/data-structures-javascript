//objects creating
const person = {
  name: "alice",
  age: "22",
  place: "america",
  location: "USA",
};

//adding properties to objects
//! dot notation
person.hobby = "coding";
person.isMarried = false;

//! bracket notation
person["courses"] = ["js", "cs", "html", "css"];
person["interest"] = "reading";
console.log(person);

//! accessing object properties
//? dot notation
const personName = person.name;
const personAge = person.age;
const personCourses = person.courses;
console.log(personName);
console.log(personAge);
console.log(personCourses);

//? bracket notation
const personHobby = person["hobby"];
// console.log(personHobby);

//! objects.keys
const keys = Object.keys(person);
console.log(keys.length);

//! object.values
const car = { brand: "honda", model: "accord", year: 2025 };
const values = Object.values(car);
console.log(values);
console.log(car);

//! hasOwnProperty (to check properties are there in objects-true/false)
const hasOwnProperty = Object.hasOwn(car, "brand");
console.log(hasOwnProperty);

const hasProperty = Object.hasOwnProperty(car, "make");
console.log(hasProperty);

//! object.assign
const targetObj = { name: "thomas" };
const sourceObj = { age: 22, country: "india" };
const result = Object.assign(targetObj, sourceObj);
console.log(result);

//!delete operator (remove property from object)
delete car.brand;
console.log(car);

//! freeze(making objects immutable no changes in their properties)
Object.freeze(car);

//modify
car.make = "nissan";
console.log(car);

//! Nesting objects
const user = {
  name: "alice",
  age: 22,
  address: {
    street: "123 main street",
    city: "new york",
    country: { name: "USA", code: "US" },
  },
};

console.log(user);

//!Accessing nested object properties
//? dot notation
const userName = user.name;
const userAddress = user.address.street;
const countryName = user.address.country.name;
console.log(countryName);

//? bracket notation for selecting or accessing objects properties
const countryNames = user["address"]["country"]["name"];
console.log(countryNames);

//! Objects in an array
const userObj = [
  { name: "alice", age: 22, city: "sans" },
  { name: "bob", age: 23, city: "bangalore" },
  { name: "bobby", age: 34, city: "new york" },
];

// console.log(userObj);

//! Accessing properties
const firstUser = userObj[0];
const secondUser = userObj[1];
const thirdUser = userObj[2];

//! Add new user to userObj
userObj.push([{ name: "david", age: 26, city: "chikago" }]);
console.log(userObj);

userObj.unshift([{ name: "ibraham", age: 30, city: "ghana" }]);
console.log(userObj);

//! Modify the arrays of object
//? update user name from ibraham to dawood
userObj[0].name = "dawood";
console.log(userObj);
