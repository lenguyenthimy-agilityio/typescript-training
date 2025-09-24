// In another file
import type { Cat } from './animal';

const myCat: Cat = {
  name: 'Whiskers',
  speak() {
    console.log('Meow');
  }
};

console.log(myCat);
