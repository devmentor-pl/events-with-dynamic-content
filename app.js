document.addEventListener('DOMContentLoaded', function () {
    // wyszukuję listę <ul /> oraz szablon elementu listy
    const productsList = document.querySelector('.adminPanel__list');
    const productItemTemplate = document.querySelector(
        '.adminPanel__item--template'
    );

    // wyszukuję przycisk dodający produkty
    const addBtn = document.querySelector('.adminPanel__addProductBtn');

    let productCounter = 1;

    // na tym przycisku ustawiam nasłuchiwanie na event 'click'
    addBtn.addEventListener('click', function () {
        // wykorzystuję szablon elementu listy i usuwam klasę ukrywającą ten element
        const newProductItem = productItemTemplate.cloneNode(true);
        newProductItem.classList.remove('adminPanel__item--template');

        // dodaję treść do nagłówka produktu
        const productTitle = newProductItem.querySelector('.product__name');
        productTitle.innerText = 'Produkt: ' + productCounter;

        // dodaję element listy do rodzica <ul />
        productsList.appendChild(newProductItem);

        // zwiększam licznik o 1, by nagłówki różniły się liczbą
        productCounter++;
    });
});
