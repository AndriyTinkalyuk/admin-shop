import renderCards from "./renderCards.js";

export default function deleteProduct(array, event) {
    if (!event.target.classList.contains('product_item_delete')) return;

    const parentElement = event.target.closest(".product_item");
    const productName = parentElement.getAttribute('data-name');
    parentElement.classList.add('deleted');
    
    setTimeout(() => { array.delete(productName); renderCards()}, 1000)
   
}