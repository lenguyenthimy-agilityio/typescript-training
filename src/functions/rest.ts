// example for rest parameters
function multiply(factor: number, ...numbers: number[]): number[] {
  return numbers.map((n) => n * factor);
}

const result = multiply(2, 1, 2, 3);
console.log(result); // [2, 4, 6]

const result2 = multiply(3, 4, 5, 6);
console.log(result2); // [12, 15, 18]

// Example of using rest parameters with tuples
function tupleExample(...args: [number, string, boolean]) {
  const [num, str, bool] = args;
  console.log(`Number: ${num}, String: ${str}, Boolean: ${bool}`);
}

// Rest Arguments example

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
