import { findProductById } from "./externalServices.mjs";
import { setLocalStorage, getLocalStorage } from "./utils.mjs";

let product = {};

export default async function productDetails(productId) {
    // get the details for the current product. findProductById will return a promise! use await or .then() to process it
    console.log("Test1")
    product = await findProductById(productId);
    console.log("Test2")
    console.log(product);
    // once we have the product details we can render out the HTML
    renderProductDetails();
    // once the HTML is rendered we can add a listener to Add to Cart button
    document.getElementById("addToCart").addEventListener("click", addToCart);
}
function addToCart() {
    let allProductsInCart = getLocalStorage("so-cart");

    // If it's not an array, wrap it in one
    if (!Array.isArray(allProductsInCart)) {
        allProductsInCart = allProductsInCart ? [allProductsInCart] : [];
    }

    allProductsInCart.push(product);
    setLocalStorage("so-cart", allProductsInCart);
}

function renderProductDetails() {
    document.querySelector("#productName").innerText = product.Brand.Name;
    document.querySelector("#productNameWithoutBrand").innerText =
        product.NameWithoutBrand;
    document.querySelector("#productImage").src = product.Images.PrimaryLarge;
    document.querySelector("#productImage").alt = product.Name;
    document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
    document.querySelector("#productColorName").innerText =
        product.Colors[0].ColorName;
    document.querySelector("#productDescriptionHtmlSimple").innerHTML =
        product.DescriptionHtmlSimple;
    document.querySelector("#addToCart").dataset.id = product.Id;
}