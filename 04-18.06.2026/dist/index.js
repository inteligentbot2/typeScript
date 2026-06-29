// const name = "userName";
// type assertion - ნიშნავს, რომ ვეუბნებით სისტემას, გვენდოს, ჩვენ უკეთ ვიცით
// და რომ შეყვანილი ინფორმაცია უეჭველად იქნება userRole ტიპის
// let yourRole: userRole = prompt("შეიყვანე შენი როლი") as userRole;
let p = prompt("შეიყვანე როლი");
if (p == "admin" || p == "editor" || p == "user") {
    let yourRole = p;
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
}
else {
    console.log("შეიყვანე სწორი როლი (admin, editor, user)");
}
const user1 = {
    id: "usr_9b3f8a12c",
    username: "alex_geo",
    email: "alexander@example.com",
    firstName: "ალექსანდრე",
    lastName: "გიორგაძე",
    role: "editor",
    isActive: true,
};
export {};
//# sourceMappingURL=index.js.map