interface Post {
  id: number;
  title: string;
  body: string;
}

export async function renderHome(): Promise<string> {
  let data;
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      console.log("response not okay");
    }
    data = await response.json();
  } catch (err) {
    err instanceof Error ? err.message : null;
  }

  return `<div class="users"> ${data
    ?.map(
      (item: Post) => `
         <article class="post">
                <span>${item.id}</span>
                <h2>${item.title}</h2>
                <p>${item.body}</p>
         </article>
  `,
    )
    .join("")}</div>`;
}
