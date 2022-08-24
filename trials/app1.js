document.addEventListener('DOMContentLoaded', function () {
    const productsList = document.querySelector('.adminPanel__list');
    const productItemTemplate = document.querySelector(
        '.adminPanel__item--template'
    );

    const addBtn = document.querySelector('.adminPanel__addProductBtn');

    let productCounter = 1;

    addBtn.addEventListener('click', function () {
        const newProductItem = productItemTemplate.cloneNode(true);
        newProductItem.classList.remove('adminPanel__item--template');

        const productTitle = newProductItem.querySelector('.product__name');
        productTitle.innerText = 'Produkt: ' + productCounter;

        productsList.appendChild(newProductItem);

        productCounter++;
    });

    const deleteBtns = document.querySelectorAll('.product__deleteBtn');

    for (const btn of deleteBtns) {
        btn.addEventListener('click', function () {
            const product = btn.closest('.adminPanel__item');
            product.remove();
        });
    }
});
