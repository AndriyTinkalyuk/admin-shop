import renderCards from "./renderCards.js";
import { productList } from "../main.js";

export default function deleteProduct(event) {
    if (!event.target.classList.contains('product_item_delete')) return;

    const parentElement = event.target.closest(".product_item");
    const productName = parentElement.getAttribute('data-name');
    productList.delete(productName);
    renderCards();
}