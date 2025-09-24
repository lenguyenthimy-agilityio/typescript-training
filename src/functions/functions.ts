// Example Call Signatures
type StringToNumberFunc = (input: string) => number;

const parseStringToNumber: StringToNumberFunc = (input) => {
  return parseInt(input, 10);
};

console.log(parseStringToNumber("123")); // 123

// Example Construct Signatures
type StringToDateConstructor = new (dateString: string) => Date;

const createDate: StringToDateConstructor = Date;

const myDate = new createDate("2023-01-01");
console.log(myDate); // Date object for January 1, 2023

// Example Call and Construct Signatures
type StringToBooleanFuncAndConstructor = {
  (input: string): boolean;
  new (input: string): Boolean;
};

// Generic example with a function
function identity<T>(arg: T): T {
  return arg;
}

const str_hello = identity<string>("hello");
console.log(str_hello); // "hello"


// generic example with a constraint
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no error
  return arg;
}

const arr_len = loggingIdentity([1, 2, 3]); // OK
console.log(arr_len); // [1, 2, 3]
