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
