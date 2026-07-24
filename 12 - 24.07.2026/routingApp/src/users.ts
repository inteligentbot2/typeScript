interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
export async function renderUsers(): Promise<string> {
  let data;
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      console.log("response not okay for users");
    }
    data = await response.json();
  } catch (err) {
    err instanceof Error ? err.message : null;
  }

  return `<div class="users"> ${data
    ?.map(
      (user: User) => `
        <article class="user-card">
    <h2>${user.name}</h2>

    <p><strong>ID:</strong> ${user.id}</p>
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Phone:</strong> ${user.phone}</p>
    <p><strong>Website:</strong> ${user.website}</p>

    <h3>Address</h3>
    <p>${user.address.street}, ${user.address.suite}</p>
    <p>${user.address.city}, ${user.address.zipcode}</p>
    <p>Latitude: ${user.address.geo.lat}</p>
    <p>Longitude: ${user.address.geo.lng}</p>

    <h3>Company</h3>
    <p><strong>Name:</strong> ${user.company.name}</p>
    <p><strong>Catch Phrase:</strong> ${user.company.catchPhrase}</p>
    <p><strong>Business:</strong> ${user.company.bs}</p>
  </article>
  `,
    )
    .join("")} </div>`;
}
