// Todo js გადავწერეთ typescript_ზე;
interface Todo {
  title: string;
  createdAt: string;
}

let todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

const app = document.querySelector("#app") as HTMLDivElement;

app.innerHTML = `
  <div style="font-family: sans-serif; max-width: 500px; margin: 40px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2>📝 ჩემი To-Do სია</h2>
    <div style="display: flex; gap: 10px; margin-bottom: 20px;">
      <input type="text" id="todo-input" placeholder="ჩაწერეთ დავალება..." style="flex: 1; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
      <button id="add-btn" style="padding: 8px 16px; background-color: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">დამატება</button>
    </div>
    <ul id="todo-list" style="list-style: none; padding: 0;"></ul>
  </div>
`;

const todoInput = document.querySelector("#todo-input") as HTMLInputElement;
const addBtn = document.querySelector("#add-btn") as HTMLButtonElement;
const todoList = document.querySelector("#todo-list") as HTMLUListElement;

function renderTodos(): void {
  todoList.innerHTML = "";
  todos.forEach((todo: Todo, index: number) => {
    const li = document.createElement("li");
    li.style.cssText =
      "display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #eee;";
    li.innerHTML = `
      <div>
        <span style="font-weight: bold; margin-right: 8px;">${index + 1}.</span>
        <span>${todo.title}</span>
        <br>
        <small style="color: #888; font-size: 11px;">🕒 ${todo.createdAt}</small>
      </div>
    `;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.style.cssText =
      "background: none; border: none; cursor: pointer; font-size: 16px;";
    deleteBtn.addEventListener("click", () => {
      deleteTodo(index);
    });
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

function deleteTodo(index: number) {
  todos.splice(index, 1);
  saveToLocalStorage();
  renderTodos();
}

function addTodo() {
  const title: string = todoInput.value.trim();
  if (title === "") return;

  const now: Date = new Date();
  const timeString: string = now.toLocaleTimeString("ka-GE");

  const newTodo = {
    title: title,
    createdAt: timeString,
  };

  todos.push(newTodo);
  saveToLocalStorage();
  renderTodos();
  todoInput.value = "";
}
function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (e: KeyboardEvent) => {
  if (e.key === "Enter") addTodo();
});

renderTodos();

