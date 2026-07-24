import "./style.css";
import { renderHome } from "./home";
import { renderUsers } from "./users";
import { renderContact } from "./contact";

type RouteHandler = () => Promise<string> | string;

const routes: Record<string, RouteHandler> = {
  "/home": renderHome,
  "/users": renderUsers,
  "/contact": renderContact,
};

async function router(): Promise<void> {
  const app = document.getElementById("app");
  if (!app) return;

  const path = window.location.hash.slice(1) || "/home";
  const handler = routes[path] || routes["/home"];

  const nav = `
    <nav>
      <a href="#/home">Home</a> 
      <a href="#/users">Users</a>
      <a href="#/contact">Contact</a>
    </nav>
    <hr />
  `;

  app.innerHTML = nav + "<div>Loading...</div>";
  app.innerHTML = nav + (await handler());
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
