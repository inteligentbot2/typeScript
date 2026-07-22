//   <div class="card">
//           <div class="card-header">
//             <div class="name">ჯონ დოუ (John Doe)</div>
//             <span class="status active">აქტიური</span>
//           </div>
//           <div class="info">ID: <span>1</span></div>
//           <div class="info">ასაკი: <span>20</span></div>
//           <div class="info">
//             ფაკულტეტი: <span>კომპიუტერული მეცნიერება</span>
//           </div>
//           <div class="info">GPA: <span>3.8</span></div>
//           <div class="courses">
//             <div class="courses-title">კურსები:</div>
//             <div class="tags">
//               <span class="tag">მონაცემთა სტრუქტურები</span>
//               <span class="tag">ალგორითმები</span>
//               <span class="tag">ვებ დეველოპმენტი</span>
//             </div>
//           </div>
//         </div>

// const სტუდენტები = [
//   {
//     id: 1,
//     სახელი: "ჯონ",
//     გვარი: "დოუ",
//     ასაკი: 20,
//     ფაკულტეტი: "კომპიუტერული მეცნიერება",
//     gpa: 3.8,
//     აქტიური_სტატუსი: true,
//     კურსები: ["მონაცემთა სტრუქტურები", "ალგორითმები", "ვებ დეველოპმენტი"],
//   },
//   {
//     id: 2,
//     სახელი: "ჯეინ",
//     გვარი: "სმითი",
//     ასაკი: 22,
//     ფაკულტეტი: "მათემატიკა",
//     gpa: 3.9,
//     აქტიური_სტატუსი: true,
//     კურსები: ["წრფივი ალგებრა", "კალკულუს III", "ალბათობა"],
//   },
//   {
//     id: 3,
//     სახელი: "ალექს",
//     გვარი: "ჯონსი",
//     ასაკი: 21,
//     ფაკულტეტი: "ფიზიკა",
//     gpa: 3.4,
//     აქტიური_სტატუსი: false,
//     კურსები: ["კვანტური მექანიკა", "თერმოდინამიკა"],
//   },
// ];

// students.forEach((s) => {});

// სტუდენტები.forEach((სტუდენტი) => {
//   console.log(სტუდენტი.სახელი);
// });

// let გაფილტრული = სტუდენტები.filter((სტუდენტი) => {
//   return სტუდენტი.ასაკი > 20;
// });

// console.log(გაფილტრული);
// გაფილტრული არის ახალი მასივი, რომელიც შედგება იმ სტუდენტებისაგან, რომელთა ასაკი არის 20-ზე მეტი

const students = [
  {
    id: crypto.randomUUID(),
    firstName: "John",
    lastName: "Doe",
    age: 20,
    major: "Computer Science",
    gpa: 3.8,
    isEnrolled: true,
    courses: ["Data Structures", "Algorithms", "Web Development"],
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    major: "Mathematics",
    gpa: 3.9,
    isEnrolled: true,
    courses: ["Linear Algebra", "Calculus III", "Probability"],
  },
  {
    id: 3,
    firstName: "Alex",
    lastName: "Jones",
    age: 21,
    major: "Physics",
    gpa: 3.4,
    isEnrolled: false,
    courses: ["Quantum Mechanics", "Thermodynamics"],
  },
];

// stundent.forEach(function(student){

// })

// students.forEach(stundent => {

// })

let grid = document.querySelector(".grid");

students.forEach((student) => {
  let card = document.createElement("div");
  card.classList.add("card");
  let activeHtml = student.isEnrolled
    ? '<span class="status active">აქტიური</span>'
    : '<span class="status inactive">არააქტიური</span>';

  //   let active;
  //   if (student.isEnrolled) {
  //     active = '<span class="status active">აქტიური</span>';
  //   } else {
  //     active = '<span class="status inactive">არააქტიური</span>';
  //   }

  console.log(activeHtml);

  card.innerHTML = `
  <div class="card-header">
            <div class="name">${student.firstName} ${student.lastName}</div>
            ${activeHtml}
          </div>
          <div class="info">ID: <span>1</span></div>
          <div class="info">ასაკი: <span>20</span></div>
           <div class="info">
            ფაკულტეტი: <span>კომპიუტერული მეცნიერება</span>
          </div>
          <div class="info">GPA: <span>3.8</span></div>
          <div class="courses">
            <div class="courses-title">კურსები:</div>
            <div class="tags">
               <span class="tag">მონაცემთა სტრუქტურები</span>
               <span class="tag">ალგორითმები</span>
              <span class="tag">ვებ დეველოპმენტი</span>
            </div>
          </div>
  `;
  grid.appendChild(card);
});
