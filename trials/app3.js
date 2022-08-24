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

    productsList.addEventListener('click', function (e) {
        const clickInitializer = e.target;

        const isDeleteBtn =
            clickInitializer.classList.contains('product__deleteBtn');
        if (isDeleteBtn) {
            const product = clickInitializer.closest('.adminPanel__item');
            product.remove();
        }
    });
});
