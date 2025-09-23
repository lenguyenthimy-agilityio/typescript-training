// class constructor
class Point {
  x: number;
  y: number;

  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

const p1 = new Point(); // x=0, y=0
const p2 = new Point(5); // x=5, y=0
const p3 = new Point(3, 4); // x=3, y=4

console.log(p1, p2, p3);
