// alias example
type ID = string | number;

function printID(id: ID) {
  console.log(`ID: ${id}`);
}

printID(123); // Valid
printID("abc"); // Valid
// printID(true); // ❌ Error: Argument of type 'true' is not assignable to parameter of type 'ID'.

type CommonUser = {
  id: ID;
  name: string;
};

const user: CommonUser = {
  id: 1,
  name: "Alice",
};

console.log(user);

// type alias with union and intersection
// An intersection combines multiple types into one bigger type.
type Admin = {
  role: string;
};

type AdminUser = User & Admin;

const admin: AdminUser = {
  id: "admin1",
  name: "Bob",
  role: "superadmin",
};

console.log(admin);