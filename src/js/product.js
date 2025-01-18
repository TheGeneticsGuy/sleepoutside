import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

function addProductToCart(product) {
  let allProductsInCart = getLocalStorage("so-cart");

  if (Array.isArray(allProductsInCart)) {
    allProductsInCart.push(product);
  } else {
    allProductsInCart = [product];
  }

  setLocalStorage("so-cart", allProductsInCart);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
