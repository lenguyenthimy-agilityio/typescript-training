// enum example
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

function move(direction: Direction) {
  console.log(`Moving ${direction}`);
}

move(Direction.Up); // Valid
// move("UP"); // ❌ Error: Argument of type '"UP"' is not assignable to parameter of type 'Direction'.
// move("LEFT"); // ❌ Error: Argument of type '"LEFT"' is not assignable to parameter of type 'Direction'.
move(Direction.Left); // Valid 

// Numeric enum
enum Status {
  Active = 1,
  Inactive,
  Pending,
}

function printStatus(status: Status) {
  console.log(`Status code: ${status}`);
}

printStatus(Status.Active); // Valid
printStatus(Status.Inactive); // Valid
// printStatus(2); // ❌ Error: Argument of type '2' is not assignable to parameter of type 'Status'.
printStatus(Status.Pending); // Valid
