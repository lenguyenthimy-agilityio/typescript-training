// optional property
type User = {
  id: number;
  name: string;
  email?: string; // email is optional
};

const user1: User = {
  id: 1,
  name: "Alice",
  email: "test@gmail.com"
};

const user2: User = {
  id: 2,
  name: "Bob"
};

function printUserInfo(user: User) {
  console.log(`ID: ${user.id}, Name: ${user.name}`);
  if (user.email) {
    console.log(`Email: ${user.email}`);
  } else {
    console.log("Email: Not provided");
  }
}

printUserInfo(user1);
printUserInfo(user2);