// const name = "userName";

type userRole = "admin" | "editor" | "user";

// type assertion - ნიშნავს, რომ ვეუბნებით სისტემას, გვენდოს, ჩვენ უკეთ ვიცით
// და რომ შეყვანილი ინფორმაცია უეჭველად იქნება userRole ტიპის
// let yourRole: userRole = prompt("შეიყვანე შენი როლი") as userRole;

let p = prompt("შეიყვანე როლი");

if (p == "admin" || p == "editor" || p == "user") {
  let yourRole: userRole = p;
  console.log(yourRole);
  switch (yourRole) {
    case "admin":
      console.log("თქვენ ხართ ადმინი");
      break;
    case "editor":
      console.log("თქვენ გაქვთ ედიტორის უფლებები");
      break;
    case "user":
      console.log("თქვენ ხართ ჩვეულებრივი მომხმარებელი");
    default:
      console.log("თქვენ ხართ ჩვეულებრივი მომხმარებელი");
      break;
  }
} else {
  console.log("შეიყვანე სწორი როლი (admin, editor, user)");
}

interface User {
  readonly id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: userRole;
  isActive: boolean;
}

const user1: User = {
  id: "usr_9b3f8a12c",
  username: "alex_geo",
  email: "alexander@example.com",
  firstName: "ალექსანდრე",
  lastName: "გიორგაძე",
  role: "editor",
  isActive: true,
};


