// generic lass example with a class
class GenericBox<T> {
  contents: T;
  constructor(value: T) {
    this.contents = value;
  }
  getContents(): T {
    return this.contents;
  }
}

const stringGenericBox = new GenericBox<string>("hello generic");
console.log(stringGenericBox.getContents()); // "hello generic"

const numberGenericBox = new GenericBox<number>(100);
console.log(numberGenericBox.getContents()); // 100

const booleanGenericBox = new GenericBox<boolean>(true);
console.log(booleanGenericBox.getContents()); // true
