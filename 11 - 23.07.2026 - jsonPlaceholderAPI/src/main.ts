import "./style.css";
import type { Post } from "./interfaces/postInterface";
import typescriptLogo from "./assets/typescript.svg";

const rootDiv = document.querySelector<HTMLDivElement>("#app");
const searchInp: HTMLInputElement = document.createElement("input");
searchInp.setAttribute("placeholder", "serch by title..");
rootDiv?.appendChild(searchInp);
let allProducts: Array<Post> = [];
async function getPostsData(): Promise<void> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    allProducts = data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
  renderPosts(allProducts);
}

function renderPosts(data: Array<Post>) {
  console.log(data);

  data.forEach((post: Post) => {
    let postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
    
    <div class="post-title"><img src="${typescriptLogo}"></div>
    <div class="post-id">${post.id} </div>
    <h2 class="post-title">
        ${post.title}
    </h2>

    <p class="post-description">
        ${post.body}
    </p>
   
    `;
    rootDiv?.appendChild(postDiv);
  });
}

getPostsData();
