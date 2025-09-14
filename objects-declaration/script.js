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
console.log(personHobby);
