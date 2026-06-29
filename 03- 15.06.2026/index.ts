let college: string = "Gldani";

college = "Gldani College";

let h: string = "hello";
let x: number = 123;
let isInGeorgia: boolean = true;

let userArr: String[] = ["user1", "user2", "úser3"];

console.log(college, h, isInGeorgia, userArr);

function jami(a: number, b: number): number {
  return a + b;
}

let sum = jami(5, 10);

function getUser(email: string, username: string): void {
  for (let i = 0; i < 5; i++) {
    console.log(email, username);
  }
}

getUser("test@test.com", "userName1");

console.log(getUser("test@test.com", "userName1"));

type Country = {
  name?: string;
  capital: string;
  population?: number;
};
// შეადგინეთ type User, რომელსაც ექნება name - string, email: string, isActive - boolean, age - number;
// შეადგინეთ ფუნქცია createUser, რომელიც მხოლოდ იუზერის ტიპის ობიექტს მიიღებს პარამეტრად და დააბრუნებს ამავე ტიპისას, isActive იყოს არა-აუცილებელი ველი და გამოიძახეთ ეს ფუნქცია და დააბრუნეთ შესაბამისი ობიექტი შემდეგი მონაცემებით: name, email, isActive, age;

function getCountry(c: Country): Country {
  return {
    capital: c.capital,
    population: c.population,
  };
}

let g = getCountry({
  name: "Georgia",
  capital: "Tbilisi",
});

console.log(g);

function getCardNumber(n: number | string) {
  return n;
}

let num = getCardNumber("1234567890");
let num1 = getCardNumber(1231321);

export {};
