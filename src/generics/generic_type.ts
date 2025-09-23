// generic example with a function
function identity<T>(arg: T): T {
  return arg;
}

const str = identity<string>("hello");
console.log(str); // "hello"

const num = identity<number>(42);
console.log(num); // 42

// generic example with a constraint
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no error
  return arg;
}

const arr = loggingIdentity([1, 2, 3]); // OK
console.log(arr); // [1, 2, 3]
