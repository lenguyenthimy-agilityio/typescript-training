// Example object type
const person: { name: string; age: number } = {
  name: "Alice",
  age: 30,
};

// Function that takes an object as a parameter
function printPersonInfo(person: { name: string; age: number }) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

printPersonInfo(person);