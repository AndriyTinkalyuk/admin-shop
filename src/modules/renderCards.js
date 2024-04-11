import { productList } from "../main.js";
import sumOfPrices from "./pricesSum.js";

export const productListDisplay = document.querySelector('.products_list__conteiner');
export default function renderCards() {
    productListDisplay.innerHTML = '';
    for (let [name, detail] of productList) {
        productListDisplay.insertAdjacentHTML(
            "afterbegin",
            `<div class="product_item" data-name="${name}">
                <div class="product_item_photo">
                    <img src="images/${detail.image}">
                </div>
                <div class="product_item_content">
                    <div class="product_item_title popup-link">Назва: ${name}</div>
                    <div class="product_item_price popup-link">Ціна: ${detail.price} грн</div>
                    <button class="product_item_delete">Delete</button>
                </div>
            </div>`
        );
    }
    sumOfPrices()

}
