import "./style.css";
// 1)
// შექმენით html ფორმა ts-ში;
// ფორმას ჰქონდეს შემდეგი ველები:
// username,
// email,
// age,
// country select (Georgia USA Span);
// message - იყოს არა-აუცილებელი;
// ფორმა ჩასვით index.html_ში app-ში, appendChild_ით
// 2) ფორმის საბმიტისას შექმენით ახალი user ობიექტი:

interface User {
  username: string;
  email: string;
  age: number;
  country: string;
  msg?: string;
}

const rootDiv = document.querySelector("#app") as HTMLDivElement;
const form = document.createElement("form");

form.innerHTML = `
  <input id="username" type="text" name="username" placeholder="Username" />
  
  <input id="email" type="email" name="email" placeholder="Email" />
  
  <input id="age"  type="number" name="age" placeholder="Age" />
  
  <select id="slt" name="country">
    <option value="Georgia">Georgia</option>
    <option value="USA">USA</option>
    <option value="Spain">Spain</option>
  </select>
  
  <textarea id="message" name="message" placeholder="Enter your message"></textarea>
  
  <button id="send" type="submit">Submit</button>
`;

rootDiv.appendChild(form);

const userName = form.querySelector("#username") as HTMLInputElement;
const email = form.querySelector("#email") as HTMLInputElement;
const age = form.querySelector("#age") as HTMLInputElement;
const slt = form.querySelector("#slt") as HTMLSelectElement;
const message = form.querySelector("#message") as HTMLTextAreaElement;
const sendBtn = form.querySelector("#send") as HTMLButtonElement;

sendBtn.addEventListener("click", (e: Event) => {
  e.preventDefault();
  const rawData: any = {
    username: userName.value.trim(),
    email: email.value.trim(),
    age: Number(age.value.trim()),
    country: slt.value,
    msg: message.value,
  };
  const validUSer = validateUserData(rawData);
  console.log(validUSer);
});

function validateUserData(data: any): User {
  if (typeof data.username !== "string") {
    console.log("invalid data, username must be sting");
  }
  if (typeof data.email !== "string") {
    console.log("invalid data, email must be string");
  }
  if (typeof data.age !== "number") {
    console.log("invalid data, age must be number");
  }
  if (typeof data.country !== "string") {
    console.log("invalid data, country must be sting");
  }

  return data as User;
}

/* 
{
 username: 'test";
 email: "test@test.com",
 age: 45,
 country: Georgia;
 message?: "this is my message"
}
*/
// 3) ამ ობიექტისთვის შექმენით ცალკე ინტერფეისი და შემოაიმპორტეთ main.ts_ში;
// შემოწმეთ რომ ველები ზუსტად არის იმ ტიპის რაც ინტერფეისშია.
// 4)დაბეჭდეთ კონსოლში ახალი შექმნილი ობიექტი საბმიტზე;
