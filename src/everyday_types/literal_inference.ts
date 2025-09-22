type State = "active" | "inactive";

function setState(s: State) {
  console.log(s);
}

let currentStatus = "active"; // inferred as string
setState(currentStatus); // ❌ error: string not assignable to "active" | "inactive"

// To fix this, we can use a type assertion
setState(currentStatus as State); // ✅ works

// Or we can use a literal type
let newStatus: State = "inactive"; // inferred as "inactive"
setState(newStatus); // ✅ works

// Or we can use a const assertion
let anotherStatus = "active" as const; // inferred as "active"
setState(anotherStatus); // ✅ works