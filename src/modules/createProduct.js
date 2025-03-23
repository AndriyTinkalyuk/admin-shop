import renderCards from "./renderCards.js";

export default function createProduct(array) {
    const productNameInput = document.getElementById('input_name');
    const productName =productNameInput.value;
    const productPriceInput = document.getElementById('input_price');
    const productPrice = productPriceInput.value;
    const productImg = document.getElementById('imageInput').files[0];

    if (!productImg) {
        alert("Файл (фото) не вибрано");
        return;
    }

    if (isNaN(productPrice) || productPrice <= 0) {
        alert("Введіть коректну ціну продукта");
        return;
    }


    const ProductDetail = { price: productPrice, image: URL.createObjectURL(productImg.name) };
    array.set(productName, ProductDetail);

    renderCards();
    const productItem = document.querySelector('.product_item');
    if (productItem) {
    productItem.classList.add('new');
}

productNameInput.value = "";
productPriceInput.value = "";
}



