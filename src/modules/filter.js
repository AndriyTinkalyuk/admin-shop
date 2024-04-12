export default function filter() {
    const productsFilterValue = document.querySelector('.product_filter_input').value.toLowerCase();
    const productsItems = document.querySelectorAll('.product_item');

    productsItems.forEach(element => {
        const itemTitle = element.querySelector('.product_item_title');
        const titleText = itemTitle.textContent.toLowerCase();

        if (!titleText.includes(productsFilterValue)) {
            element.style.display = 'none';
        } else {
            element.style.display = 'flex';
        }
    });
}
