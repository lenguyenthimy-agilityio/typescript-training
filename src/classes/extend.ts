// extend example
class Animal {
  move() {
    console.log("Moving along!");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const d = new Dog();
d.move(); // Inherited from Animal
d.bark(); // Specific to Dog

// implements example
interface Canine {
  bark(): void;
}

class Wolf implements Canine {
  bark() {
    console.log("Howl!");
  }
}

const w = new Wolf();
w.bark(); // Howl!
// w.move(); // ❌ Error: Property 'move' does not exist on type 'Wolf'.
