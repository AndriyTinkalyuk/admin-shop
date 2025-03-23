
const pricesSum = document.querySelector('.products_sum span')


export default function sumOfPrices(array) {
    let sum = 0;
if (array.size > 0) { 
    for (let value of array.values() ) { 
        sum += parseInt(value.price);
    }
} 
pricesSum.textContent = `${sum} грн`;
}

