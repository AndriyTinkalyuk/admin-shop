import filter from "./modules/filter.js";
import createProduct from "./modules/createProduct.js";
import renderCards, {productListDisplay} from "./modules/renderCards.js";
import deleteProduct from "./modules/deleteProduct.js";
import popup from "./modules/popup.js";

export const productList = new Map();


const productsFilterInput= document.querySelector('.product_filter_input')
const createProductButton = document.getElementById('create_product_button');


createProductButton.addEventListener('click', createProduct);
productListDisplay.addEventListener('click', deleteProduct);
productsFilterInput.addEventListener('input', filter);
productListDisplay.addEventListener('click', popup);