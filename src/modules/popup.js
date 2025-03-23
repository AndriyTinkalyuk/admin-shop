import { productList } from "../main.js";
import renderCards from "./renderCards.js";

export  default function popup(event) {
    const parentElement = event.target.closest(".product_item");
    const productName = parentElement.getAttribute('data-name');
    if (event.target.classList.contains('popup-link')) {
    const prevValue = document.querySelector('.popup_last_value');
    const popupButton = document.querySelector('.popup_button button');

    togglePopup();

    if (event.target.classList.contains('product_item_price')) {
        popupButton.onclick = () => newPrice(productName);
        const product = productList.get(productName);
        prevValue.textContent = `${product.price} грн`;
        
    }else if (event.target.classList.contains('product_item_title')) {
        popupButton.onclick =  () => newName(productName);
        prevValue.textContent = productName;
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
 togglePopup();
}

function newPrice(productName) { 

    const newValue = document.querySelector('.popup_name_input').value;

    const product = productList.get(productName);
    product.price = newValue;
    renderCards();
    togglePopup();
}

const popupBody = document.querySelector('.popup');
const popupClose = document.querySelector('.popup_close');
const body = document.querySelector('body');

function togglePopup() { 
    popupBody.classList.toggle('open');

    if (popupBody.classList.contains('open')) {
        body.classList.add('lock');
    } else {
        body.classList.remove('lock');
    }
}


popupClose.addEventListener('click', togglePopup);


