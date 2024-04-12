import { productList } from "../main.js";
import renderCards from "./renderCards.js";

export default function createProduct() {
    const productName = document.getElementById('input_name').value;
    const productPrice = document.getElementById('input_price').value;
    const productImg = document.getElementById('imageInput').files[0];

    if (!productImg) {
        alert("Файл (фото) не вибрано");
        return;
    }

    if (isNaN(productPrice) || productPrice <= 0) {
        alert("Введіть коректну ціну продукта");
        return;
    }


    const ProductDetail = { price: productPrice, image: productImg.name };
    productList.set(productName, ProductDetail);
    console.log(productList);
    renderCards();
    const productItem = document.querySelector('.product_item');
    if (productItem) {
    productItem.classList.add('new');
}
}



