import { productList } from "../main.js";
import renderCards from "./renderCards.js";

export  default function popup(event) {
    const popup = document.querySelector('.popup')
    const parentElement = event.target.closest(".product_item");
    const productName = parentElement.getAttribute('data-name');
    
if (event.target.classList.contains('popup-link')) {

    const popupButton = document.querySelector('.popup_button button')

    popup.classList.add('open');


    if (event.target.classList.contains('product_item_price')) {
        popupButton.onclick = () => newPrice(productName);
        
    }else if (event.target.classList.contains('product_item_title')) {
        popupButton.onclick =  () => newName(productName);
    }
}
}



function newName(productName) { 
 const newValue = document.querySelector('.popup_name_input').value;
 console.log(productName);
 const product = productList.get(productName);

 const ProductDetail = { price: product.price, image: product.image};

 productList.set(newValue, ProductDetail);

 productList.delete(productName);
 renderCards();
}

function newPrice(productName) { 

    const newValue = document.querySelector('.popup_name_input').value;

    const product = productList.get(productName);
    product.price = newValue;
    renderCards();
}