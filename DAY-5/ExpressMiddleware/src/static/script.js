// fetch api -> /products & display all product titles

async function fetchAllProducts() {
  try {
    let response = await fetch("http://localhost:3000/products");
    if (response.ok) {
      let products = await response.json();
      DisplayProducts(products);
    }
  } catch (error) {
    console.log(error);
  }
}

function DisplayProducts(products) {
  let listOfProducts = document.querySelector(".listofproducts");
  for (const product of products) {
    let newProductItem = document.createElement("li");
    newProductItem.innerText = product.title;
    newProductItem.style.width = "200px";

    newProductItem.className = "list-group-item";
    listOfProducts.appendChild(newProductItem);
  }
}

document.addEventListener("DOMContentLoaded", fetchAllProducts);
