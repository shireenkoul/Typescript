// const person: {
//   name: string;
//   lastName: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Shireen",
//   lastName: "Koul",
//   age: 25,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"]
// };

enum Role {
  AUTHOR,
  ADMIN
}

const person = {
  name: "Shireen",
  lastName: "Koul",
  age: 25,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

let favActivities: string[];
favActivities = ["Reading", "Hello"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

// person.role.push("admin");

console.log(person.role); // This is a downside
