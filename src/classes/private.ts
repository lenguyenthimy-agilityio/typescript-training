// private Member Visibility for classes example
class Greeter2 {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  private getName() {
    return "hi";
  }
}

const g2 = new Greeter2();
g2.greet(); // OK
// g2.getName(); // ❌ Error: Property 'getName' is private and only accessible within class 'Greeter'.