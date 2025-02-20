import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";

console.log("TEST5");
const productId = getParam("product");
productDetails(productId);
