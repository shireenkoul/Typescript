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
var Role;
(function (Role) {
    Role[Role["AUTHOR"] = 0] = "AUTHOR";
    Role[Role["ADMIN"] = 1] = "ADMIN";
})(Role || (Role = {}));
var person = {
    name: "Shireen",
    lastName: "Koul",
    age: 25,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
var favActivities;
favActivities = ["Reading", "Hello"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
// person.role.push("admin");
console.log(person.role); // This is a downside
