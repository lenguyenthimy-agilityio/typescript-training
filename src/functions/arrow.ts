// example arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(2, 3)); // 5

// concise body syntax
const square = (x: number): number => x * x;

console.log(square(4)); // 16

// arrow function with no parameters
const getRandomNumber = (): number => Math.random();

console.log(getRandomNumber()); // random number between 0 and 1
