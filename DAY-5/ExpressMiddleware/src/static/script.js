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
    newProductItem.id = product.id;
    newProductItem.innerHTML = product.title;
    newProductItem.innerHTML += ` <button class="btn btn-danger" onclick="DeleteProduct(${product.id})" ><i class="fa-solid fa-trash"></i></button>`;
    newProductItem.style.width = "200px";

    newProductItem.className = "list-group-item";
    listOfProducts.appendChild(newProductItem);
  }
}

async function DeleteProduct(theProductId) {
  let response = await fetch(
    `http://localhost:3000/products/delete/${theProductId}`,
    { method: "DELETE" },
  );
  if (response.ok) {
    let { msg } = await response.json();
    if (msg == "success") {
      // delete product from UI
      document.getElementById(theProductId).remove();
    }
  }
}

document.addEventListener("DOMContentLoaded", fetchAllProducts);
