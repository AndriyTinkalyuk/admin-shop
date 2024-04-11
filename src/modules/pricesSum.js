import {productList} from '../main.js'

const pricesSum = document.querySelector('.products_sum span')


export default function sumOfPrices() {
if (productList.size > 0) { 
    let sum = 0;
    for (let value of productList.values() ) { 
        sum += parseInt(value.price);
    }
    pricesSum.textContent = `${sum} грн`;
}
}

