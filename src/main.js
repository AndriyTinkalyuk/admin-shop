import filter from "./modules/filter.js";
import createProduct from "./modules/createProduct.js";
import renderCards, {productListDisplay} from "./modules/renderCards.js";
import deleteProduct from "./modules/deleteProduct.js";
import popup from "./modules/popup.js";

export const productList = new Map();


const productsFilterInput= document.querySelector('.product_filter_input')
const createProductButton = document.getElementById('create_product_button');


createProductButton.addEventListener('click', () => createProduct(productList));
productListDisplay.addEventListener('click',(event) => deleteProduct(productList, event));
productsFilterInput.addEventListener('input', filter);
productListDisplay.addEventListener('click', popup);


window.addEventListener('beforeunload', () => {
    localStorage.setItem("products", JSON.stringify(Array.from(productList.entries())));
});

window.addEventListener('load', () => {
    const raw = localStorage.getItem("products");
    const products = JSON.parse(raw);
    if (products) {
        products.forEach(([key, value]) => {
            productList.set(key, value);
        });
        renderCards();
    }
});
