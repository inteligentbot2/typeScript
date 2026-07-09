import "./style.css";

enum ProductCategories {
  mensClothing = "men's clothing",
  womensClothing = "women's clothing",
  jewelry = "jewelery",
  electronics = "electronics",
}

interface Product {
  readonly _id: number;
  title: string;
  price: number;
  description: string;
  category: ProductCategories;
  image: string;
  rating: any;
}

let allProducts: Array<Product> = [];
async function getData(): Promise<void> {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      console.log("წამოღება ვერ მოხერხდა");
    }
    let data = await response.json();
    allProducts = data;
  } catch (error) {
    console.log("ქსელის ან API-ს შეცდომა");
  }

  renderCategories(ProductCategories);
  renderProducts(allProducts);
}
const productContainer: HTMLDivElement = document.createElement("div");
productContainer.setAttribute("id", "products-grid");

function renderCategories(categories: Record<string, string>) {
  let cats = Object.values(categories);
  cats.forEach((item: string) => {
    console.log(item); // კატეგორიები enum-დან კონსოლში;
  });
}

function renderProducts(products: Product[]) {
  products.forEach(function (singleProduct: Product) {
    let productDiv: HTMLDivElement = document.createElement("div");
    productDiv.innerHTML = `
      <img src="${singleProduct.image}">
      <h1>${singleProduct.title}</h1>
      <p>${singleProduct.description}</p>
      <p>ფასი: ${singleProduct.price} | რეტინგი: ${singleProduct.rating.rate}</p>
    `;
    productContainer.appendChild(productDiv);
  });
}

getData();

const app = document.querySelector("#app") as HTMLDivElement;

if (app) {
  app.appendChild(productContainer);
}
