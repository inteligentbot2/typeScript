let h = "hello world"; //string - ტექსტი
let isStudent = true; // boolean
let asaki = 17; // number
let masivi = [];
let obj = {
  key1: "val1",
};
console.log(typeof h);
console.log(typeof obj);

let rand = Math.floor(Math.random() * 100) + 1;
console.log(rand);

let person = {
  id: crypto.randomUUID(),
  name: "Usaxelo",
  age: 35,
  gender: "Male",
  nationality: "Georgian",
};

console.log(person);
console.log(person.nationality);

const personDiv = document.getElementById("person");
let flagText;
// if (person.nationality == "Georgian") {
//   flagText = `<span class="flag-georgia">&#x1F1EC;&#x1F1EA;</span>`;
// } else {
//   flagText = "other";
// }

person.nationality == "Georgian"
  ? (flagText = `<span class="flag-georgia">&#x1F1EC;&#x1F1EA;</span>`)
  : (flagText = "other");

personDiv.innerHTML = `
    <div>id: ${person.id}</div>
    <h1>სახელი: ${person.name}</h1>
    <div><span>${person.age}</span> <span>${person.gender}</span></div>
    <div>
        ${flagText} მოქალაქე 
    </div>
`;

