// A base class
class Person {
  constructor(public name: string) {}
}

// A mixin function
function Timestamped<TBase extends new (...args: any[]) => {}>(Base: TBase) {
  return class extends Base {
    createdAt = new Date();
  };
}

// Another mixin
function Activatable<TBase extends new (...args: any[]) => {}>(Base: TBase) {
  return class extends Base {
    isActive = false;

    activate() {
      this.isActive = true;
    }

    deactivate() {
      this.isActive = false;
    }
  };
}

// Compose mixins
class MixinUser extends Activatable(Timestamped(Person)) {}

const u = new MixinUser("Alice");
console.log(u.name); // Alice
console.log(u.createdAt); // Current date
console.log(u.isActive); // false
u.activate();
console.log(u.isActive); // true
u.deactivate();
console.log(u.isActive); // false
